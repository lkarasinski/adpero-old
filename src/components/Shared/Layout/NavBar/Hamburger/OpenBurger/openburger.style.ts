import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    /* Positioning */
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    /* Box Model */
    display: grid;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    place-items: center;

    /* Typography */
    font: 1.5em 600;

    /* Visual */
    background-color: "ffffff";
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ListItem = styled(NavLink)`
    /* Box Model */
    margin: 0.5em;

    /* Typography */
    font-size: 0.4em;
    color: "000000";

    /* Visual */
    text-decoration: none;

    &.active {
        color: #5671fe;
    }
`;
