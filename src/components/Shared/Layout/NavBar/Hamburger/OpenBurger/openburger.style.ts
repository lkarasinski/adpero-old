import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: white;
    z-index: 100;
    display: grid;
    place-items: center;
    font-size: 1.5em;
    font-weight: 600;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ListItem = styled(NavLink)`
    color: black;
    text-decoration: none;
    font-size: 0.4em;
    margin: 0.5em;
    &.active {
        color: #5671fe;
    }
`;
