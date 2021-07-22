import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { breakpoints } from "@constants/breakpoints";

export const Nav = styled.nav`
    /* Box Model */
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 0;

    /* Visual */
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);

    ${breakpoints.maxMedium} {
        justify-content: center;
        padding: 10px 0;
    }
    ${breakpoints.xsmall} {
        font-size: 2em;
    }
    ${breakpoints.small} {
        font-size: 3em;
    }
    ${breakpoints.medium} {
        font-size: 3.5em;
    }
    ${breakpoints.large} {
        font-size: 4em;
    }
    ${breakpoints.xlarge} {
        font-size: 4em;
    }
    ${breakpoints.xxlarge} {
        font-size: 4.5em;
    }
    ${breakpoints.xxxlarge} {
        font-size: 8em;
    }
`;

export const StyledNavLink = styled(NavLink)`
    margin: 0.5em;
    font-size: 0.4em;
    color: "000000";
    text-decoration: none;
    &.active {
        color: #5671fe;
    }
`;

export const StyledUl = styled.ul`
    display: flex;
    align-items: center;
    margin: 1rem;
`;

export const Logo = styled(Link)`
    font-size: 1em;
    font-weight: 700;
    color: #3d5eff;
    text-decoration: none;
    ${breakpoints.minLarge} {
        margin-left: 0.5em;
    }
`;
