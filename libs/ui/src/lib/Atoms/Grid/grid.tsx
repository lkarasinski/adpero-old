import styled from "styled-components";

type SingleMargin = `${number}rem` | `0`;

type MarginType =
    | `${SingleMargin} ${SingleMargin} ${SingleMargin} ${SingleMargin}`
    | `${SingleMargin} ${SingleMargin}`
    | `${SingleMargin}`;

export type GridProps = {
    isMobile?: boolean;
    margin?: MarginType;
};

export const Grid = styled.div<GridProps>`
    display: grid;
    grid-template-columns: repeat(
        auto-fit,
        ${({ isMobile }) => (isMobile ? `minmax(19rem, 1fr)` : `19rem`)}
    );

    gap: 2rem;
    margin: ${({ margin }) => margin || "0"};
`;

export default Grid;
