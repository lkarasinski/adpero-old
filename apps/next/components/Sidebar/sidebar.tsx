import {
    faColumns,
    faMapMarkedAlt,
    faPoll,
} from "@fortawesome/free-solid-svg-icons";
import { SidebarLink, SidebarTemplate } from "@adpero/ui";
import { useJourneys } from "@adpero/contexts";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

export type SidebarLink = {
    label: string;
    href: string;
    type: "poll" | "category";
};

type SidebarProps = {
    isEditModeEnabled: boolean;
    isMobile: boolean;
    isMenuOpen: boolean;
    toggleMenu: () => void;
};

export const Sidebar = ({ isMobile, isMenuOpen, toggleMenu }: SidebarProps) => {
    const router = useRouter();
    const journeyID = router.query.journeyID as string;
    const { journeys } = useJourneys();

    if (!router.pathname.startsWith("/journeys/[journeyID]/edit")) {
        return (
            <SidebarTemplate
                isMobile={isMobile}
                isMenuOpen={isMenuOpen}
                toggleMenu={toggleMenu}
            >
                <SidebarLink
                    text="Dashboard"
                    currentLink={router.asPath}
                    icon={faColumns}
                    href="/"
                />
                <SidebarLink
                    text="Journeys"
                    currentLink={router.asPath}
                    icon={faMapMarkedAlt}
                    href="/journeys"
                />
                <SidebarLink
                    text="Polls"
                    currentLink={router.asPath}
                    icon={faPoll}
                    href="/polls"
                />
            </SidebarTemplate>
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
            <SidebarTemplate
                isMobile={isMobile}
                editMode
                isMenuOpen={isMenuOpen}
                toggleMenu={toggleMenu}
            >
                <Container>
                    <SidebarLink
                        text="Journey Info"
                        currentLink={router.asPath}
                        icon={faColumns}
                        href={`/journeys/${journeyID}/edit`}
                    />
                    <SidebarLink
                        text="Participants"
                        currentLink={router.asPath}
                        href={`/journeys/${journeyID}/edit/participants/`}
                    />
                    <SidebarLink
                        text="Invite"
                        currentLink={router.asPath}
                        href={`/journeys/${journeyID}/edit/invite/`}
                    />
                </Container>
                <Container>
                    <SidebarLink
                        text="Polls"
                        currentLink={router.asPath}
                        icon={faMapMarkedAlt}
                        href={`/journeys/${journeyID}/edit/categories`}
                    />
                    {categories.map((link) => (
                        <SidebarLink
                            key={link.href}
                            text={link.label}
                            currentLink={router.asPath}
                            href={`/journeys/${journeyID}/edit/categories/${link.href}`}
                        />
                    ))}
                </Container>
                <Container>
                    <SidebarLink
                        text="Polls"
                        currentLink={router.asPath}
                        icon={faPoll}
                        href={`/journeys/${journeyID}/edit/polls`}
                    />
                    {polls.map((link) => (
                        <SidebarLink
                            key={link.href}
                            text={link.label}
                            currentLink={router.asPath}
                            href={`/journeys/${journeyID}/edit/polls/${link.href}`}
                        />
                    ))}
                </Container>
            </SidebarTemplate>
        );
    }
};

const Container = styled.div`
    margin-bottom: 2rem;
`;
