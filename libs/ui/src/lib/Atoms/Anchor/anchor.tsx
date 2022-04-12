import styled from "styled-components";

export interface AnchorProps {
    color?: string;
}

export const Anchor = styled.a<AnchorProps>`
    font-family: ${({ theme }) => theme.font.family};
    font-size: ${({ theme }) => theme.font.size.small};
    font-weight: ${({ theme }) => theme.font.weight.extraBold};
    color: ${({ theme, color }) => color ?? theme.colors.gray.dark};
    text-decoration: underline;
    text-decoration-thickness: 2px;
    word-break: break-word;
    cursor: pointer;
`;

export default Anchor;
