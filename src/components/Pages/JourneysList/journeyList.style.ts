import { breakpoints } from '@constants/breakpoints';
import styled from 'styled-components';

export const Heading = styled.h2`
    font-size: 3rem;
    text-align: center;
    font-weight: 400;
    ${breakpoints.maxMedium} {
        font-size: 2.5rem;
    }
`;
export const Span = styled.span`
    color: #5671fe;
    font-weight: 700;
`;

export const Wrapper = styled.div`
    min-width: 80%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 5em;
    ${breakpoints.maxMedium} {
        padding: 2em;
    }
`;
