import React from "react";
import styled from "styled-components";

const SVG = styled.svg`
    fill: ${({ theme }) => theme.colors.gray.light};
`;

const Path = styled.path``;

const DropdownIcon: React.FC = () => {
    return (
        <SVG
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M1 1L6.29289 6.29289C6.68342 6.68342 7.31658 6.68342 7.70711 6.29289L13 1"
                strokeLinecap="round"
            />
        </SVG>
    );
};

export default DropdownIcon;
