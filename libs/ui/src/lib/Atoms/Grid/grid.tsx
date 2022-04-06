import { mobileScreenSize } from "@adpero/constants";
import styled from "styled-components";

type SingleMargin = `${number}rem` | `0`;

type MarginType =
    | `${SingleMargin} ${SingleMargin} ${SingleMargin} ${SingleMargin}`
    | `${SingleMargin} ${SingleMargin}`
    | `${SingleMargin}`;

export type GridProps = {
    margin?: MarginType;
};

export const Grid = styled.div<GridProps>`
    display: grid;
    grid-template-columns: repeat(auto-fit, 19rem);

    @media (max-width: ${mobileScreenSize}px) {
        grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
    }

    gap: 2rem;
    margin: ${({ margin }) => margin || "0"};
`;

export default Grid;
