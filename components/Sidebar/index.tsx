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
    isContracted: boolean;
};

const Sidebar: React.FC<Props> = ({ isContracted }) => {
    const router = useRouter();
    const journeyID = router.query.journeyID as string;
    const { journeys } = useJourneys();

    if (!router.pathname.startsWith("/journeys/[journeyID]/edit")) {
        return (
            <DefaultSidePanel isContracted={isContracted}>
                <StyledLink
                    icon={faColumns}
                    href="/"
                    isContracted={isContracted}
                >
                    Dashboard
                </StyledLink>
                <StyledLink
                    icon={faMapMarkedAlt}
                    href="/journeys"
                    isContracted={isContracted}
                >
                    Journeys
                </StyledLink>
                <StyledLink
                    icon={faPoll}
                    href="/polls"
                    isContracted={isContracted}
                >
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
            <DefaultSidePanel isContracted={isContracted} editMode>
                <Container>
                    <StyledLink
                        href={`/journeys/${journeyID}/edit`}
                        icon={faColumns}
                        isContracted={isContracted}
                    >
                        <>Journey Info</>
                    </StyledLink>
                </Container>
                <Container>
                    <StyledLink
                        href={`/journeys/${journeyID}/edit/categories`}
                        icon={faMapMarkedAlt}
                        isContracted={isContracted}
                    >
                        <>Categories</>
                    </StyledLink>
                    {!isContracted &&
                        categories.map((link) => (
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
                        isContracted={isContracted}
                    >
                        <>Polls</>
                    </StyledLink>
                    {!isContracted &&
                        polls.map((link) => (
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
