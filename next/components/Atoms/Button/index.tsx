import React from "react";
import styled from "styled-components";

interface Props {
    isPrimary?: boolean;
    onClick?: () => void;
    isBig?: boolean;
    isContracted?: boolean;
}

interface ButtonProps {
    isBig?: boolean;
    isPrimary?: boolean;
    isContracted?: boolean;
}

const Wrapper = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    padding: ${({ isContracted }) => (isContracted ? "0" : "2em")};
    margin: auto auto 0;
    font-family: ${({ theme }) => theme.font};
    font-size: ${({ isBig }) => (isBig ? "1.5rem" : "0.875rem")};
    font-weight: 800;
    color: #ffffff;
    cursor: pointer;
    background-color: ${({ isPrimary }) => (isPrimary ? "#3D5EFF" : "#313131")};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};
`;

const Button: React.FC<Props> = ({ children, ...props }) => {
    return <Wrapper {...props}>{children}</Wrapper>;
};

export default Button;
