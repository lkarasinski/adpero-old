import React from "react";
import styled from "styled-components";

const Wrapper = styled.input`
    min-width: 13rem;
    padding: 0.625rem;
    font-family: Nunito, sans-serif;
    font-size: 0.75rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.gray.light};
    border: 1px solid ${({ theme }) => theme.colors.gray.light};
    border-radius: 6px;
`;

const SmallSearchBar: React.FC = () => {
    return <Wrapper placeholder="search for journeys"></Wrapper>;
};

export default SmallSearchBar;
