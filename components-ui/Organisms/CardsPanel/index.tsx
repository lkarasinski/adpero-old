import React from 'react';
import Label from 'components-ui/Atoms/Label';
import PollCard, { IPollCard } from 'components-ui/Molecules/PollCard';
import JourneyCard from 'components-ui/Molecules/JourneyCard';
import styled from 'styled-components';
import { IJourneyCard } from 'utils/types';

type Props = {
    cards: IPollCard[] | IJourneyCard[];
    label?: string;
};

const CardsPanel: React.FC<Props> = ({ cards, label }) => {
    if (!cards || !cards.length) return null;
    if ('expenses' in cards[0]) {
        const array = cards as IJourneyCard[];
        return (
            <Wrapper>
                {label ? <Label isAccent>{label}</Label> : null}
                <Grid>
                    {array.map((element, i) => (
                        <JourneyCard
                            id={element.id}
                            key={element.label + i}
                            label={element.label}
                            expenses={element.expenses}
                        />
                    ))}
                </Grid>
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
            </Wrapper>
        );
    }
};

export default CardsPanel;

const Wrapper = styled.div``;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 19rem);
    gap: 2rem;
    margin: 1.25rem 0;
`;
