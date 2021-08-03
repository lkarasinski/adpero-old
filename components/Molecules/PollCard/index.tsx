import React from "react";
import Label from "components/Atoms/Label";
import Text from "components/Atoms/Text";
import styled from "styled-components";

export interface IPollCard {
    detail: string;
    label: string;
}

const Wrapper = styled.div`
    max-width: 14rem;
    min-height: 6rem;
    padding: 1.25rem;
    cursor: pointer;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.shadow};
`;

const PollCard: React.FC<IPollCard> = ({ detail, label }) => {
    return (
        <Wrapper>
            <Label>{detail}</Label>
            <Text>{label}</Text>
        </Wrapper>
    );
};

export default PollCard;
