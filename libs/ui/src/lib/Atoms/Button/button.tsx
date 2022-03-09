import styled from "styled-components";

export type ButtonProps = {
    color: string;
    disabled?: boolean;
    hoverColor?: string;
};

export const Button = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em 2em;
    border: 2px solid ${({ color, hoverColor }) => hoverColor ?? color};
    border-radius: 10px;
    margin: 0;

    font-family: ${({ theme }) => theme.font.family};
    font-size: 0.875rem;
    font-weight: ${({ theme }) => theme.font.weight.extraBold};
    color: ${({ hoverColor }) => hoverColor ?? "#ffffff"};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    background-color: ${({ theme, color }) => color ?? theme.colors.gray.dark};
    box-shadow: 0px 0.3px 0.3px
            ${({ color, hoverColor }) => hoverColor ?? color},
        0px 0.6px 0.7px -1.2px ${({ color, hoverColor }) => hoverColor ?? color},
        0px 1.4px 1.6px -2.5px ${({ color, hoverColor }) => hoverColor ?? color};

    transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out,
        transform 0.1s ease-in-out, filter 0.1s ease-in-out;

    &:hover {
        color: ${({ hoverColor, color }) => (hoverColor ? color : "#ffffff")};
        background-color: ${({ color, hoverColor }) => hoverColor ?? color};
        transform: translateY(-0.125rem);
    }
`;

export default Button;
