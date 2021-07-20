import styled from 'styled-components';
import { breakpoints } from '@constants/breakpoints';
interface Props {
    isActive: boolean;
}

export const HamburgerButton = styled.div<Props>`
    background-color: ${({ isActive }) => (isActive ? 'transparent' : 'black')};
    position: absolute;
    display: block;
    transition: background-color 0.3s ease;
    ::after,
    ::before {
        content: '';
        left: 0;
        position: absolute;
        background-color: black;
        transition: transform 0.3s ease;
    }

    width: 20px;
    height: 3px;
    ::after,
    ::before {
        width: 20px;
        height: 3px;
    }
    ::after {
        top: 8px;
        transform: translateY(${({ isActive }) => (isActive ? '-8px' : 0)})
            rotate(${({ isActive }) => (isActive ? '45deg' : '0deg')});
    }
    ::before {
        transform: translateY(${({ isActive }) => (isActive ? '8px' : 0)})
            rotate(${({ isActive }) => (isActive ? '-45deg' : '0deg')});
        bottom: 8px;
    }
`;

export const Container = styled.button`
    ${breakpoints.small} {
        transform: scale(1.4);
    }
    ${breakpoints.medium} {
        transform: scale(1.8);
    }
    position: absolute;
    background: none;
    border: none;
    right: 30px;
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    z-index: 200;
`;
