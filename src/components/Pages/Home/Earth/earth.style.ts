import styled from "styled-components";
import { breakpoints } from "@constants/breakpoints";
export const CanvasContainer = styled.div`
    margin-top: 0.5em;
    margin-bottom: 1em;

    ${breakpoints.xsmall} {
        width: 200px;
        height: 200px;
    }
    ${breakpoints.small} {
        width: 300px;
        height: 300px;
    }
    ${breakpoints.medium} {
        width: 350px;
        height: 350px;
    }
    ${breakpoints.large} {
        width: 400px;
        height: 400px;
    }
    ${breakpoints.xlarge} {
        width: 500px;
        height: 500px;
    }
    ${breakpoints.xxlarge} {
        width: 600px;
        height: 600px;
    }
    ${breakpoints.xxxlarge} {
        width: 900px;
        height: 900px;
    }
`;

export const EarthPanel = styled.div`
    display: grid;
    place-items: center;
    margin-top: 1.5em;
    ${breakpoints.xsmall} {
        font-size: 1em;
    }
    ${breakpoints.small} {
        margin-top: 1em;
        font-size: 1.25em;
    }
    ${breakpoints.medium} {
        margin-top: 1em;
        font-size: 1.5em;
    }
    ${breakpoints.minLarge} {
        grid-row: 1/2;
        grid-column: 2/3;
    }
    ${breakpoints.large} {
        margin-left: 50px;
        font-size: 1.75em;
    }
    ${breakpoints.xlarge} {
        font-size: 2em;
    }
    ${breakpoints.xxlarge} {
        font-size: 2.5em;
    }
    ${breakpoints.xxxlarge} {
        font-size: 3em;
    }
`;

export const Highlight = styled.span`
    /* Positioning */
    position: relative;

    /* Box Model */
    display: inline-block;

    /* Typographic */
    font-weight: 700;
    color: #5671fe;

    ::before {
        /* Positioning */
        position: absolute;
        bottom: 0;

        /* Box Model */
        display: block;
        width: 100%;
        height: 10px;

        /* Misc */
        content: "";

        /* Visual */
        background: linear-gradient(90deg, #5671fe -4.22%, #4ac7ff 100%);
        border-radius: 2px;
    }
`;

export const EarthHeading = styled.h2`
    /* Typographic */
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 1.75em;
`;
