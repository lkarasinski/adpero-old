import styled from "styled-components";

type MarginType = `${number}rem ${number}rem ${number}rem ${number}rem`;

type Props = {
    isMobile?: boolean;
    margin?: MarginType;
};

const Grid = styled.div<Props>`
    display: grid;
    grid-template-columns: repeat(
        ${({ isMobile }) => (isMobile ? "auto-fit" : "auto-fill")},
        minmax(19rem, 1fr)
    );
    gap: 2rem;
    margin: ${({ margin }) => margin || "0"};
`;

export default Grid;
