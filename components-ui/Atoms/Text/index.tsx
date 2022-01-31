import React from "react";
import styled from "styled-components";

interface Props {
    isSmall?: boolean;
    size?: number;
    color?: "light" | "dark" | "red" | "background" | "lightPrimary";
}

const Wrapper = styled.p<Props>`
    margin: 0;
    font-size: ${({ size }) => `${size}rem` ?? "1rem"};
    font-weight: 800;
    line-break: loose;
    color: ${({ color, theme }) => {
        switch (color) {
            case "dark":
                return theme.colors.gray.dark;
            case "red":
                return theme.colors.red;
            case "background":
                return theme.colors.background;
            case "lightPrimary":
                return theme.colors.lightPrimary;
            default:
                return theme.colors.gray.light;
        }
    }};
`;

const Text: React.FC<Props> = ({ children, ...props }) => (
    <Wrapper {...props}>{children}</Wrapper>
);

export default Text;
