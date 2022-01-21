import styled from "styled-components";

type Props = {
    onClick?: () => void;
    isBig?: boolean;
    isContracted?: boolean;
    color?: "red" | "primary" | "gray" | "green";
    disabled?: boolean;
};

const Button = styled.button<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 0rem;
    height: 3rem;
    padding: ${({ isContracted }) => (isContracted ? "0" : "2em")};
    margin: 0;
    font-family: ${({ theme }) => theme.font};
    font-size: ${({ isBig }) => (isBig ? "1.5rem" : "0.875rem")};
    font-weight: 800;
    color: #ffffff;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    background-color: ${({ theme, color }) => {
        switch (color) {
            case "red":
                return theme.colors.red;
            case "primary":
                return theme.colors.primary;
            case "gray":
                return theme.colors.gray.dark;
            case "green":
                return theme.colors.green;
            default:
                return theme.colors.gray.dark;
        }
    }};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};
    min-width: 11rem;
`;

export default Button;
