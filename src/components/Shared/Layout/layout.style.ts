import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
`;

export const StyledNavLink = styled(NavLink)`
    color: "000000";
    text-decoration: none;

    &.active {
        font-weight: 700;
        color: #9d62fd;
    }
`;

export const StyledUl = styled.ul`
    margin: 1rem;
`;

export const Content = styled.div``;
