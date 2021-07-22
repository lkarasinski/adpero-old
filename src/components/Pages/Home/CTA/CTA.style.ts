import styled from "styled-components";
import { breakpoints } from "@constants/breakpoints";

export const Container = styled.div`
    display: grid;
    place-items: center;
    ${breakpoints.minLarge} {
        grid-row: 1/2;
        grid-column: 1/2;
    }
    ${breakpoints.xsmall} {
        font-size: 1.5em;
    }
    ${breakpoints.small} {
        font-size: 2em;
    }
    ${breakpoints.medium} {
        font-size: 2.25em;
    }
    ${breakpoints.large} {
        font-size: 2.25em;
    }

    /* Edge case for cta button */
    @media (min-width: 769px) and (max-width: 840px) {
        font-size: 1.8em;
    }
    ${breakpoints.xlarge} {
        font-size: 3em;
    }
    ${breakpoints.xxlarge} {
        font-size: 3.5em;
    }
    ${breakpoints.xxxlarge} {
        font-size: 5em;
    }
`;

export const Button = styled.button`
    /* Box Model */
    padding: 0.25em 1.5em;

    /* Typographic */
    font-family: Poppins, sans-serif;
    font-size: 1em;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5em;
    color: #ffffff;
    overflow-wrap: normal;

    /* Visual */
    cursor: pointer;
    background: linear-gradient(96.08deg, #3d5eff 0%, #4ac7ff 100%);
    border: none;
    border-radius: 10px;
    box-shadow: 0 4px 4px hsla(215, 95%, 62%, 0.5);
`;

export const Heading = styled.h2`
    /* Box Model */
    margin-bottom: 0.5em;

    /* Typographic */
    font-family: Poppins, sans-serif;
    font-size: 0.75em;
    font-style: normal;
    font-weight: 500;
    text-align: center;
`;
