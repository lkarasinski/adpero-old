import { Link } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "@constants/breakpoints";

export const Wrapper = styled.div`
    /* Box Model */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em;
    margin: 40px auto;

    /* Visual */
    background-color: "ffffff";
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 25%));
    border-radius: 20px;

    ${breakpoints.maxMedium} {
        /* Box Model */
        flex-direction: column;
        max-width: 400px;
        padding: 1em 0 2em;
    }
`;

export const JourneyHeading = styled.h2`
    /* Typographic */
    font-size: 40px;
    font-weight: 700;
    color: #3d5eff;

    ${breakpoints.maxMedium} {
        /* Box Model */
        margin-bottom: 0.5em;
    }
`;

export const SLink = styled(Link)`
    /* Typographic */
    text-decoration: none;
`;

export const Button = styled.div`
    /* Box Model */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 220px;
    height: 66px;
    padding: 1.75rem;

    /* Visual */
    background: linear-gradient(92.27deg, #5671fe 0%, #3d5eff 100%);
    filter: drop-shadow(4px 0 4px rgba(0, 0, 0, 25%));
    border-radius: 20px;

    span {
        /* Typographic */
        font-size: 1.4rem;
        font-weight: 600;
        color: "ffffff";
    }
`;
