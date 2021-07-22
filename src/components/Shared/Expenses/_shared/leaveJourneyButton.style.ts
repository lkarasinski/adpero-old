import styled from "styled-components";

export const ExpenseTitle = styled.h1`
    /* Positioning */
    position: relative;

    /* Box Model */
    display: inline-block;
    width: auto;
    margin: 1rem 0;

    /* Typographic */
    font-family: "Open Sans", sans-serif;
    font-size: 1.7em;

    ::after {
        /* Positioning */
        position: absolute;
        bottom: -8px;
        left: 0;

        /* Box Model */
        width: 100%;
        height: 6px;
        margin: 0 auto;

        /* Misc */
        content: "";

        /* Visual */
        background-color: #9d62fd;
    }
`;

export const Heading1 = styled.h1`
    /* Positioning */
    position: relative;

    /* Box Model */
    display: inline-block;
    width: auto;
    margin: 1rem 0;

    /* Typographic */
    font-family: "Open Sans", sans-serif;
    font-size: 2em;

    ::after {
        /* Positioning */
        position: absolute;
        bottom: -8px;
        left: 0;

        /* Box Model */
        width: 100%;
        height: 6px;
        margin: 0 auto;

        /* Misc */
        content: "";

        /* Visual */
        background-color: #9d62fd;
    }
`;

export const DetailTextContainer = styled.div`
    /* Box Model */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const SpendingSummaryTitle = styled.h3`
    /* Typographic */
    font-size: 1.5em;
`;

export const DetailText = styled.p`
    /* Positioning */
    grid-row: 1/2;

    /* Box Model */
    padding: 10px;
    margin: 10px;
    overflow: wrap;

    /* Typographic */
    font-size: 1em;
    color: #2e2e2e;

    /* Visual */
    background-color: #f3f3f3;
    border-radius: 15px;
`;

export const ColorHighlight = styled.span`
    /* Typographic */
    font-weight: 700;
    color: #9d62fd;
`;

export const UnderlineHighlight = styled.span`
    /* Positioning */
    position: relative;

    /* Box Model */
    display: inline-block;
    margin: 0.5rem 0;

    ::after {
        /* Positioning */
        position: absolute;
        bottom: -5px;
        left: 0;

        /* Box Model */
        width: 100%;
        height: 0.2rem;
        margin: 0 auto;

        /* Misc */
        content: "";

        /* Visual */
        background-color: #9d62fd;
    }
`;

export const ExpenseContainer = styled.div`
    /* Box Model */
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

export const RemoveDetailButton = styled.button`
    /* Positioning */
    position: relative;

    /* Box Model */
    display: grid;
    width: 40px;
    height: 40px;
    place-items: center;

    /* Visual */
    cursor: pointer;
    background-color: #fd6262;
    border: none;
    border-radius: 15px;

    ::after,
    ::before {
        /* Positioning */
        position: absolute;

        /* Box Model */
        width: 2px;
        height: 20px;

        /* Misc */
        content: "";

        /* Visual */
        background-color: #626262;
    }
    ::after {
        /* Animation */
        transform: rotate(45deg);
    }
    ::before {
        /* Animation */
        transform: rotate(135deg);
    }
`;

export const AddDetailButton = styled.button``;
