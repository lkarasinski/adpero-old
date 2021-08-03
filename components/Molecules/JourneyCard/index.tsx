import React from "react";
import styled from "styled-components";
import Label from "components/Atoms/Label";
import Text from "components/Atoms/Text";

interface StyledProps {
    isBig?: boolean;
}

export interface IJourneyCard {
    label: string;
    details: string[];
}

interface Props extends StyledProps {
    label: string;
    details: string[];
}

const Wrapper = styled.div<StyledProps>`
    max-width: 14rem;
    min-height: 20rem;
    padding: 20px;
    cursor: pointer;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.shadow};
`;

const JourneyCard: React.FC<Props> = ({ label, details, ...props }) => {
    return (
        <Wrapper {...props}>
            <Label isAccent>{label}</Label>
            <div>
                {details && details.map((e, i) => <Text key={e + i}>{e}</Text>)}
            </div>
        </Wrapper>
    );
};

export default JourneyCard;
