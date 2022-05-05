import styled from "styled-components";

export interface TextProps {
    color?: string;
}

export const Text = styled.p<TextProps>`
    margin: 0;
    color: ${({ color, theme }) => color ?? theme.colors.gray.dark};
    font-family: ${({ theme }) => theme.font.family};
    font-size: ${({ theme }) => theme.font.size.small};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    line-break: loose;
`;

export default Text;
