import React from "react";
import styled from "styled-components";

interface Props {
    primary?: boolean;
    onClick?: () => void;
    isBig?: boolean;
}

const Wrapper = styled.button<Props>`
    padding: 0.75em 1.625em;
    font-size: ${({ isBig }) => (isBig ? "1.5rem" : "1rem")};
    font-weight: 900;
    color: "#ffffff";
    cursor: pointer;
    background-color: ${({ primary }) => (primary ? "#3D5EFF" : "#313131")};
    border: none;
    border-radius: 1em;
`;

const Button: React.FC<Props> = ({ children, ...props }) => {
    return <Wrapper {...props}>{children}</Wrapper>;
};

export default Button;
