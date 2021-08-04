import React from "react";
import Label from "components/Atoms/Label";
import PollCard, { IPollCard } from "components/Molecules/PollCard";
import JourneyCard, { IJourneyCard } from "components/Molecules/JourneyCard";
import styled from "styled-components";

const Wrapper = styled.div``;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 19rem);
    gap: 2rem;
    margin: 1.25rem 0;
`;

interface Props {
    cards: IPollCard[] | IJourneyCard[];
    label: string;
}

const CardsPanel: React.FC<Props> = ({ cards, label }) => {
    if (!cards || !cards.length) return null;
    if ("details" in cards[0]) {
        const array = cards as IJourneyCard[];
        return (
            <Wrapper>
                <Label isAccent>{label}</Label>
                <Grid>
                    {array.map((element, i) => (
                        <JourneyCard
                            id={element.id}
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
        const array = cards as IPollCard[];
        return (
            <Wrapper>
                <Label isAccent>{label}</Label>
                <Grid>
                    {array.map((element, i) => (
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
