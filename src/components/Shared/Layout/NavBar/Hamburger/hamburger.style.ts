import styled from "styled-components";
import { breakpoints } from "@constants/breakpoints";
interface Props {
    isActive: boolean;
}

export const HamburgerButton = styled.div<Props>`
    /* Positioning */
    position: absolute;

    /* Box Model */
    display: block;
    width: 20px;
    height: 3px;

    /* Visual */
    background-color: ${({ isActive }) => (isActive ? "transparent" : "black")};
    transition: background-color 0.3s ease;
    ::after,
    ::before {
        position: absolute;
        left: 0;
        width: 20px;
        height: 3px;
        content: "";
        background-color: "000000";
        transition: transform 0.3s ease;
    }

    ::after {
        top: 8px;
        transform: translateY(${({ isActive }) => (isActive ? "-8px" : 0)})
            rotate(${({ isActive }) => (isActive ? "45deg" : "0deg")});
    }
    ::before {
        bottom: 8px;
        transform: translateY(${({ isActive }) => (isActive ? "8px" : 0)})
            rotate(${({ isActive }) => (isActive ? "-45deg" : "0deg")});
    }
`;

export const Container = styled.button`
    /* Positioning */
    position: absolute;
    right: 30px;
    z-index: 200;

    /* Box Model */
    display: grid;
    width: 30px;
    height: 30px;

    /* Visual */
    background: none;
    border: none;
    place-items: center;

    ${breakpoints.small} {
        transform: scale(1.4);
    }
    ${breakpoints.medium} {
        transform: scale(1.8);
    }
`;
