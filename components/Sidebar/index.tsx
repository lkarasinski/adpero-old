import {
    faColumns,
    faMapMarkedAlt,
    faPoll,
} from '@fortawesome/free-solid-svg-icons';
import Label from 'components-ui/Atoms/Label';
import Text from 'components-ui/Atoms/Text';
import StyledLink from 'components-ui/Molecules/StyledLink';
import DefaultSidePanel from 'components-ui/Organisms/DefaultSidePanel';
import useJourneys from 'context/JourneysContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

export type SidebarLink = {
    label: string;
    href: string;
    type: 'poll' | 'category';
};

type Props = {
    isEditModeEnabled: boolean;
    isContracted: boolean;
};

const Sidebar: React.FC<Props> = ({ isContracted }) => {
    const router = useRouter();
    const journeyID = router.query.journeyID as string;
    const { journeys } = useJourneys();

    if (!router.pathname.startsWith('/journeys/[journeyID]/edit')) {
        return (
            <DefaultSidePanel isContracted={false}>
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
                        type: 'category',
                    };

                    sidebarData.push(data);
                });
                journey.data.polls.forEach((p) => {
                    const data: SidebarLink = {
                        label: p.title,
                        href: p.id,
                        type: 'poll',
                    };

                    sidebarData.push(data);
                });
            }
        }

        const categories = sidebarData.filter((s) => s.type === 'category');
        const polls = sidebarData.filter((s) => s.type === 'poll');

        return (
            <DefaultSidePanel isContracted={false}>
                <Container>
                    <EditLink
                        href={`/journeys/${journeyID}/edit/info`}
                        passHref
                    >
                        <Label>Journey Info</Label>
                    </EditLink>
                </Container>
                <Container>
                    <Label>Categories</Label>
                    {categories.map((link) => (
                        <EditLink
                            key={link.href}
                            href={`/journeys/${journeyID}/edit/${link.href}`}
                            passHref
                        >
                            <StyledText> {link.label}</StyledText>
                        </EditLink>
                    ))}
                </Container>
                <Container>
                    <Label>Polls</Label>
                    {polls.map((link) => (
                        <EditLink
                            key={link.href}
                            href={`/journeys/${journeyID}/edit/${link.href}`}
                            passHref
                        >
                            <StyledText key={link.href}>
                                {link.label}
                            </StyledText>
                        </EditLink>
                    ))}
                </Container>
            </DefaultSidePanel>
        );
    }
};

const Container = styled.div`
    margin-bottom: 2rem;
`;

const EditLink = styled(Link)`
    cursor: pointer;

    transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;

    :hover {
        background-color: ${({ theme }) => theme.colors.gray.light};
        color: ${({ theme }) => theme.colors.background};
    }
`;

const StyledText = styled(Text)`
    padding: 0.25rem 0.5rem;
    margin: 0.25rem 0 0.25rem 0.5rem;
    border-radius: 0.25rem;
    cursor: pointer;

    transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;

    :hover {
        background-color: ${({ theme }) => theme.colors.gray.light};
        color: ${({ theme }) => theme.colors.background};
    }
`;

export default Sidebar;
