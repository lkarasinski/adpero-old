import React from "react";
import Label from "components-ui/Atoms/Label";
import Text from "components-ui/Atoms/Text";
import styled from "styled-components";

export interface IPollCard {
    detail?: string;
    label: string;
    dot?: boolean;
}

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 19rem;
    min-height: 6rem;
    padding: 2rem;
    cursor: pointer;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.shadow};
`;

const Dot = styled.div`
    position: absolute;
    top: -3px;
    right: -3px;
    width: 16px;
    height: 16px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
`;

const PollCard: React.FC<IPollCard> = ({ detail, label, dot }) => {
    if (detail) {
        return (
            <Wrapper>
                <Label>{detail}</Label>
                <Text>{label}</Text>
            </Wrapper>
        );
    }
    return (
        <Wrapper>
            <Label isAccent>{label}</Label>
            {dot && <Dot />}
        </Wrapper>
    );
};

export default PollCard;
