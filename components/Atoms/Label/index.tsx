import React from "react";
import styled from "styled-components";

interface Props {
    isAccent?: boolean;
}

const Wrapper = styled.h3<Props>`
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    font-weight: 800;
    color: ${({ isAccent, theme }) =>
        isAccent ? theme.colors.primary : theme.colors.gray.dark};
`;

const Label: React.FC<Props> = ({ children, ...props }) => {
    return <Wrapper {...props}>{children}</Wrapper>;
};

export default Label;
