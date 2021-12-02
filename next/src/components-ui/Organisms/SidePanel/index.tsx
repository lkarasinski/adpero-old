import React from "react";
import styled from "styled-components";
import StyledLink from "components-ui/Molecules/StyledLink";
import {
    faColumns,
    faPoll,
    faCogs,
    faPlus,
    faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "components-ui/Atoms/Logo";
import Icon from "components-ui/Atoms/Icon";
import Link from "next/link";
import SidePanelButton from "components-ui/Molecules/SidePanelButton";

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

const BottomContainer = styled.div`
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

type Props = {
    isContracted: boolean;
};

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
            <BottomContainer>
                <Link href="/settings" passHref>
                    <SidePanelButton
                        aria-label="Settings"
                        isContracted={isContracted}
                    >
                        {!isContracted && "Settings"}
                        <Icon icon={faCogs} />
                    </SidePanelButton>
                </Link>
                <Link href="/new" passHref>
                    <SidePanelButton
                        aria-label="New Journey"
                        isPrimary
                        isContracted={isContracted}
                    >
                        {!isContracted && "New journey"}
                        <Icon icon={faPlus} />
                    </SidePanelButton>
                </Link>
            </BottomContainer>
        </Wrapper>
    );
};

export default SidePanel;
