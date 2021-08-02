import Logo from "components/Atoms/Logo";
import StyledLink from "components/Atoms/StyledLink";
import SmallSearchBar from "components/Molecules/SmallSearchBar";
import UserPanelDropdown from "components/Molecules/UserPanelDropdown";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
    position: fixed;
    display: flex;
    align-items: center;
    width: 100vw;
    gap: 2rem;
    padding: 1rem 2rem;
    background-color: #ffffff;
`;

interface Props {
    photoURL: string | null;
}

const Navbar: React.FC<Props> = ({ photoURL }) => {
    return (
        <Wrapper>
            <Logo />
            <SmallSearchBar />
            <StyledLink href="/journeys">Journeys</StyledLink>
            <StyledLink href="/polls">Polls</StyledLink>
            {photoURL && <UserPanelDropdown photoURL={photoURL} />}
        </Wrapper>
    );
};

export default Navbar;
