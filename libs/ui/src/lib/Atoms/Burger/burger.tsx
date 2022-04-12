import React from "react";
import styled from "styled-components";

export const Burger: React.FC = () => {
    return (
        <Wrapper>
            <Bar />
        </Wrapper>
    );
};

const Wrapper = styled.button`
    all: unset;
    cursor: pointer;
    z-index: 100;
    display: grid;
    place-items: center;
    width: 3rem;
    height: 3rem;
    -webkit-tap-highlight-color: transparent;
`;

const Bar = styled.span`
    display: block;
    width: 1rem;
    height: 0.125rem;
    background-color: ${({ theme }) => theme.colors.primary.regular};
    margin: 0;
    padding: 0;

    :before,
    :after {
        display: block;
        content: "";
        width: 1rem;
        height: 0.125rem;
        background-color: ${({ theme }) => theme.colors.primary.regular};
        margin: 0;
        padding: 0;
        transition: transform 0.3s ease-in-out;
    }
    transition: background-color 0.3s ease-in-out;

    :before {
        transform: translateY(-0.375rem);
    }

    :after {
        transform: translateY(0.25rem);
    }
`;
