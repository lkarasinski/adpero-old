import styled from 'styled-components';
import { InputField } from '@components/Shared/Expenses/ExpenseForm/InputField';
import { breakpoints } from '@constants/breakpoints';

export const Wrapper = styled.div`
    ${breakpoints.maxMedium} {
        margin: auto;
        font-size: 1.75rem;
    }
    font-size: 2.25rem;
    max-width: 10em;
    display: grid;
    grid-template-columns: 8.05em 1.5em;
    grid-template-rows: 1.5em 1.5em;
    gap: 0.472em;
`;

export const Heading = styled.h3`
    font-weight: 500;
    font-size: 1em;

    grid-column: 1/3;
`;

export const Span = styled.span`
    color: #5671fe;
    font-weight: 700;
`;

export const Input = styled(InputField)`
    font-size: 1em;
    min-height: 1rem;
    height: 1.5em;
    height: 1.5em;
`;

export const Button = styled.button`
    font-size: 1em;
    width: 3.375rem;
    height: 3.375rem;
    border-radius: 5px;
    background-color: #5671fe;
    border: none;
    cursor: pointer;
    grid-area: 'b';
    display: grid;
    place-items: center;
`;
