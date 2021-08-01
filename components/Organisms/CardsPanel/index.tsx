import React from "react";
import Label from "components/Atoms/Label";
import PollCard, { IPollCard } from "components/Molecules/PollCard";
import JourneyCard, { IJourneyCard } from "components/Molecules/JourneyCard";
import styled from "styled-components";

const Wrapper = styled.div``;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 14rem);
    gap: 2.5rem;
    margin: 1.25rem 0;
`;

interface Props {
    elements: IPollCard[] | IJourneyCard[];
    label: string;
}

const CardsPanel: React.FC<Props> = ({ elements, label }) => {
    // test crashes without this, no idea why
    if (!elements) return <div></div>;
    if ("details" in elements[0]) {
        const array = elements as IJourneyCard[];
        return (
            <Wrapper>
                <Label>{label}</Label>
                <Grid>
                    {array &&
                        array.map((element, i) => (
                            <JourneyCard
                                key={element.label + i}
                                label={element.label}
                                details={element.details}
                            />
                        ))}
                </Grid>
                <hr />
            </Wrapper>
        );
    } else {
        const array = elements as IPollCard[];
        return (
            <Wrapper>
                <Label>{label}</Label>
                <Grid>
                    {array &&
                        array.map((element, i) => (
                            <PollCard
                                key={element.detail + element.label + i}
                                detail={element.detail}
                                label={element.label}
                            />
                        ))}
                </Grid>
                <hr />
            </Wrapper>
        );
    }
};

export default CardsPanel;
