import React from "react";
import Label from "components/Atoms/Label";
import styled from "styled-components";
import DetailsContainer, { IDetail } from "../DetailsContainer";

const Wrapper = styled.div`
    flex-grow: 1;
    max-width: 18rem;
    padding: 2rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
`;
const Flex = styled.div`
    display: grid;
    gap: 1.25rem;
    margin-top: 0.5rem;
`;

interface Props {
    details: IDetail[];
}

const DetailsCard: React.FC<Props> = ({ details }) => {
    return (
        <Wrapper>
            <Label isAccent>Apartament</Label>
            <Flex>
                {details &&
                    details.map((detail: IDetail) => (
                        <DetailsContainer
                            {...detail}
                            key={detail.label + detail.value}
                        />
                    ))}
            </Flex>
        </Wrapper>
    );
};

export default DetailsCard;
