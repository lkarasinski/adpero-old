import React from "react";
import Button from "components/Atoms/Button";
import styled from "styled-components";
import StyledLink from "components/Molecules/StyledLink";
import {
    faColumns,
    faPoll,
    faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "components/Atoms/Logo";
import Icon from "components/Atoms/Icon";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div<Props>`
    position: fixed;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: ${({ isContracted }) => (isContracted ? "5rem" : "14rem")};
    height: 100vh;
    padding: 2rem 1rem;
    background-color: #f2f5f9;
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.shadow};

    transition: max-width 200ms ease-in-out;
`;

const StyledNav = styled.nav`
    margin-top: 5.25rem;
`;

const NewJourneyButton = styled(Button)<Props>`
    width: ${({ isContracted }) => (isContracted ? "3rem" : "12rem")};
    height: 3rem;
    padding: 0;
    gap: 0.5rem;
    transition: width 200ms ease-in-out;
`;

interface Props {
    isContracted: boolean;
}

const SidePanel: React.FC<Props> = ({ isContracted }) => {
    return (
        <Wrapper isContracted={isContracted}>
            <Logo isContracted={isContracted} />
            <StyledNav>
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
            </StyledNav>
            <NewJourneyButton isPrimary isContracted={isContracted}>
                {!isContracted && "New journey"}
                <Icon icon={faPlus} />
            </NewJourneyButton>
        </Wrapper>
    );
};

export default SidePanel;
