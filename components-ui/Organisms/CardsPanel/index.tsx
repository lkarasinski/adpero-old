import React from "react";
import Label from "components-ui/Atoms/Label";
import PollCard from "components-ui/Molecules/PollCard";
import JourneyCard from "components-ui/Molecules/JourneyCard";
import styled from "styled-components";
import { Journey, Poll } from "utils/interfaces";
import Link from "next/link";

type Props = {
    cards: Poll[] | Journey[];
    label?: string;
};

const CardsPanel: React.FC<Props> = ({ cards, label }) => {
    if (!cards || !cards.length) return null;
    if ("expenses" in cards[0]) {
        const array = cards as Journey[];
        return (
            <Wrapper>
                {label ? <Label isAccent>{label}</Label> : null}
                <Grid>
                    {array.map((journey) => (
                        <JourneyCard key={journey.id} journey={journey} />
                    ))}
                </Grid>
            </Wrapper>
        );
    } else {
        const array = cards as Poll[];

        return (
            <Wrapper>
                <Label isAccent>{label}</Label>
                <Grid>
                    {array.map((poll) => {
                        const id = poll.id;
                        return (
                            <Link passHref key={id} href={`polls/${id}`}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a>
                                    <PollCard key={id} poll={poll} />
                                </a>
                            </Link>
                        );
                    })}
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
