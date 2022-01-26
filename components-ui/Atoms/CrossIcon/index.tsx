import React from "react";
import styled from "styled-components";

interface Props {
    callback: () => void;
}

const Wrapper = styled.div`
    display: grid;
    place-items: center;
    max-width: 21px;
    max-height: 21px;
    cursor: pointer;
    stroke: ${({ theme }) => theme.colors.red};
`;

const CrossIcon: React.FC<Props> = ({ callback }) => (
    <Wrapper
        onClick={callback}
        onKeyPress={callback}
        role="button"
        tabIndex={0}
    >
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2 2L18 19M18 2L2 19"
                strokeWidth="3"
                strokeLinecap="round"
            />
        </svg>
    </Wrapper>
);

export default CrossIcon;
