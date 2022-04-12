import styled from "styled-components";

export interface LabelProps {
    color?: string;
}

export const Label = styled.h2<LabelProps>`
    padding: 0;
    margin: 0;
    font-size: ${({ theme }) => theme.font.size.medium};
    font-family: ${({ theme }) => theme.font.family};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    color: ${({ color, theme }) => color ?? theme.colors.gray.dark};
    line-break: loose;
`;

export default Label;
