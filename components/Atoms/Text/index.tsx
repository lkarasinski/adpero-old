import React from "react";
import styled from "styled-components";

interface Props {
    isDark?: boolean;
}

const Wrapper = styled.p<Props>`
    margin: 0.25rem 0 0;
    font-size: 1rem;
    font-weight: 800;
    color: ${({ isDark, theme }) =>
        isDark ? theme.colors.gray.dark : theme.colors.gray.light};
`;

const Text: React.FC<Props> = ({ children, ...props }) => {
    return <Wrapper {...props}>{children}</Wrapper>;
};

export default Text;
