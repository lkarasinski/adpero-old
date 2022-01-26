import React from "react";
import styled from "styled-components";

interface Props {
    isAccent?: boolean;
}

const Wrapper = styled.h2<Props>`
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    font-weight: 900;
    color: ${({ isAccent, theme }) =>
        isAccent ? theme.colors.primary : theme.colors.gray.dark};
`;

const Label: React.FC<Props> = ({ children, ...props }) => (
    <Wrapper {...props}>{children}</Wrapper>
);

export default Label;
