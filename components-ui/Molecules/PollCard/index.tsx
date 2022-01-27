import React from "react";
import Label from "components-ui/Atoms/Label";
import Text from "components-ui/Atoms/Text";
import styled from "styled-components";
import Card from "components-ui/Atoms/Card";

export interface IPollCard {
    detail?: string;
    label: string;
    dot?: boolean;
    id?: string;
}

const Wrapper = styled(Card)`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 6rem;
    cursor: pointer;
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
