import styled from "styled-components";

export interface HeadingProps {
    color?: string;
}

export const Heading = styled.h1`
    font-family: ${({ theme }) => theme.font.family};
    font-size: ${({ theme }) => theme.font.size.large};
    font-weight: ${({ theme }) => theme.font.weight.black};
    color: ${({ color, theme }) => color ?? theme.colors.primary};
`;

export default Heading;
