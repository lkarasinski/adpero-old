import styled from "styled-components";
import { InputField } from "@components/Shared/Expenses/ExpenseForm/InputField";
import { breakpoints } from "@constants/breakpoints";

export const Wrapper = styled.div`
    /* Box Model */
    display: grid;
    grid-template-rows: repeat(1.5em, 2);
    grid-template-columns: 8.05em 1.5em;
    gap: 0.472em;
    max-width: 10em;

    /* Typographic */
    font-size: 2.25rem;

    ${breakpoints.maxMedium} {
        /* Box Model */
        margin: auto;

        /* Typographic */
        font-size: 1.75rem;
    }
`;

export const Heading = styled.h3`
    /* Box Model */
    grid-column: 1/3;

    /* Typographic */
    font-weight: 500;
`;

export const Span = styled.span`
    /* Typographic */
    font-weight: 700;
    color: #5671fe;
`;

export const Input = styled(InputField)`
    /* Box Model */
    height: 1.5em;
    min-height: 1rem;
`;

export const Button = styled.button`
    /* Box Model */
    display: grid;
    place-items: center;
    width: 3.375rem;
    height: 3.375rem;

    /* Visual */
    cursor: pointer;
    background-color: #5671fe;
    border: none;
    border-radius: 5px;
`;
