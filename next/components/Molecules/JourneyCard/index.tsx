import React from "react";
import styled from "styled-components";
import Label from "components/Atoms/Label";
import Text from "components/Atoms/Text";
import Link from "next/link";

export interface IJourneyCard {
    label: string;
    details: string[];
    id?: string;
}

interface Props {
    label: string;
    details: string[];
    id?: string;
}

const Wrapper = styled.div`
    max-width: 19rem;
    min-height: 20rem;
    padding: 2rem;
    cursor: pointer;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.shadow};
`;

const JourneyCard: React.FC<Props> = ({ label, id, details, ...props }) => {
    return (
        <Link href={`/journeys/${id}`} passHref>
            <Wrapper {...props}>
                <Label>{label}</Label>
                <div>
                    {details &&
                        details.map((e, i) => <Text key={e + i}>{e}</Text>)}
                </div>
            </Wrapper>
        </Link>
    );
};

export default JourneyCard;
