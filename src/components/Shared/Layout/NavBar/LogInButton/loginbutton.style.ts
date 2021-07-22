import styled from "styled-components";

interface Props {
    horizontal?: boolean;
}

export const Button = styled.button<Props>`
    /* Box model */
    width: 5rem;
    height: 3rem;
    margin-right: ${({ horizontal }) => (horizontal ? " 20px" : "0")};
    margin-left: ${({ horizontal }) => (horizontal ? " auto" : "0")};

    /* Visual */
    cursor: pointer;
    background-color: transparent;
    border: 0.15rem solid "000000";
    border-radius: 1rem;
`;
