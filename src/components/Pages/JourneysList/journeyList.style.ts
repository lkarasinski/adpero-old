import { breakpoints } from "@constants/breakpoints";
import styled from "styled-components";

export const Heading = styled.h2`
    /* Typographic */
    font-size: 3rem;
    font-weight: 400;
    text-align: center;
    ${breakpoints.maxMedium} {
        font-size: 2.5rem;
    }
`;
export const Span = styled.span`
    /* Typographic */
    font-weight: 700;
    color: #5671fe;
`;

export const Wrapper = styled.div`
    /* Box Model */
    min-width: 80%;
    max-width: 1440px;
    padding: 5em;
    margin: 0 auto;
    ${breakpoints.maxMedium} {
        padding: 2em;
    }
`;
