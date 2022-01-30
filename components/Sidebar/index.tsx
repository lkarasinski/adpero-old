import {
    faColumns,
    faMapMarkedAlt,
    faPoll,
} from "@fortawesome/free-solid-svg-icons";
import StyledLink from "components-ui/Molecules/StyledLink";
import DefaultSidePanel from "components-ui/Organisms/DefaultSidePanel";
import useJourneys from "context/JourneysContext";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import EditLink from "./EditLink";

export type SidebarLink = {
    label: string;
    href: string;
    type: "poll" | "category";
};

type Props = {
    isEditModeEnabled: boolean;
    isMobile: boolean;
    isMenuOpen: boolean;
    toggleMenu: () => void;
};

const Sidebar: React.FC<Props> = ({ isMobile, isMenuOpen, toggleMenu }) => {
    const router = useRouter();
    const journeyID = router.query.journeyID as string;
    const { journeys } = useJourneys();

    if (!router.pathname.startsWith("/journeys/[journeyID]/edit")) {
        return (
            <DefaultSidePanel
                isMobile={isMobile}
                isMenuOpen={isMenuOpen}
                toggleMenu={toggleMenu}
            >
                <StyledLink icon={faColumns} href="/">
                    Dashboard
                </StyledLink>
                <StyledLink icon={faMapMarkedAlt} href="/journeys">
                    Journeys
                </StyledLink>
                <StyledLink icon={faPoll} href="/polls">
                    Polls
                </StyledLink>
            </DefaultSidePanel>
        );
    } else {
        const sidebarData: SidebarLink[] = [];
        if (journeyID) {
            const journey = journeys.find((j) => j.id === journeyID);
            if (journey) {
                journey.data.expenses.forEach((e) => {
                    const data: SidebarLink = {
                        label: e.title,
                        href: e.id,
                        type: "category",
                    };

                    sidebarData.push(data);
                });
                journey.data.polls.forEach((p) => {
                    const data: SidebarLink = {
                        label: p.title,
                        href: p.id,
                        type: "poll",
                    };

                    sidebarData.push(data);
                });
            }
        }

        const categories = sidebarData
            .filter((s) => s.type === "category")
            .slice(0, 4);
        const polls = sidebarData.filter((s) => s.type === "poll").slice(0, 4);

        return (
            <DefaultSidePanel
                isMobile={isMobile}
                editMode
                isMenuOpen={isMenuOpen}
                toggleMenu={toggleMenu}
            >
                <Container>
                    <StyledLink
                        href={`/journeys/${journeyID}/edit`}
                        icon={faColumns}
                    >
                        <>Journey Info</>
                    </StyledLink>
                    <EditLink
                        href={`/journeys/${journeyID}/edit/participants/`}
                        label="Participants"
                    />
                    <EditLink
                        href={`/journeys/${journeyID}/edit/invite/`}
                        label="Invite"
                    />
                </Container>
                <Container>
                    <StyledLink
                        href={`/journeys/${journeyID}/edit/categories`}
                        icon={faMapMarkedAlt}
                    >
                        <>Categories</>
                    </StyledLink>
                    {categories.map((link) => (
                        <EditLink
                            key={link.href}
                            href={`/journeys/${journeyID}/edit/categories/${link.href}`}
                            label={link.label}
                        />
                    ))}
                </Container>
                <Container>
                    <StyledLink
                        href={`/journeys/${journeyID}/edit/polls`}
                        icon={faPoll}
                    >
                        <>Polls</>
                    </StyledLink>
                    {polls.map((link) => (
                        <EditLink
                            key={link.href}
                            href={`/journeys/${journeyID}/edit/polls/${link.href}`}
                            label={link.label}
                        />
                    ))}
                </Container>
            </DefaultSidePanel>
        );
    }
};

const Container = styled.div`
    margin-bottom: 2rem;
`;

export default Sidebar;
