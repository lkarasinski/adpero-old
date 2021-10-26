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

const Wrapper = styled.div`
    position: fixed;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 14rem;
    height: 100vh;
    padding: 2rem 1rem;
    background-color: #f2f5f9;
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.shadow};
`;

const StyledNav = styled.nav`
    margin-top: 5.25rem;
`;

const SidePanel: React.FC = () => {
    return (
        <Wrapper>
            <Logo />
            <StyledNav>
                <StyledLink icon={faColumns} href="/">
                    Dashboard
                </StyledLink>
                <StyledLink icon={faMapMarkedAlt} href="/journeys">
                    Journeys
                </StyledLink>
                <StyledLink icon={faPoll} href="/polls">
                    Polls
                </StyledLink>
            </StyledNav>
            <Button primary>Create new journey +</Button>
        </Wrapper>
    );
};

export default SidePanel;
