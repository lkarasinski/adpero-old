import * as React from "react";
import PageTransitionAnimation from "components-ui/Atoms/PageTransitionAnimation";
import CardGrid from "components-ui/Templates/CardGrid";
import useJourneys from "context/JourneysContext";
import type { NextPage } from "next";
import Card from "components-ui/Atoms/Card";
import Label from "components-ui/Atoms/Label";
import Link from "next/link";
import router from "next/router";
import styled from "styled-components";
import Button from "components-ui/Atoms/Button";
import { getEmptyPoll } from "utils/constants";

const Polls: NextPage = () => {
    const { getCurrentJourney, updateJourney } = useJourneys();
    const journey = getCurrentJourney();

    if (!journey) return null;

    const createNewPoll = async () => {
        const emptyPoll = getEmptyPoll();
        const currentPolls = [...journey.data.polls];
        currentPolls.push(emptyPoll);
        journey.data.polls = currentPolls;
        await updateJourney(journey.id, { ...journey.data });
    };

    return (
        <PageTransitionAnimation>
            <CardGrid label={`${journey.data.name} - Polls:`}>
                <Button onClick={createNewPoll}>Create new Poll</Button>
                {journey.data.polls.map((poll) => (
                    <Link
                        href={`/journeys/${router.query.journeyID}/edit/polls/${poll.id}`}
                        key={poll.id}
                        passHref
                    >
                        <StyledCard as={"a"}>
                            <Label isAccent>{poll.title}</Label>
                        </StyledCard>
                    </Link>
                ))}
            </CardGrid>
        </PageTransitionAnimation>
    );
};

const StyledCard = styled(Card)`
    cursor: pointer;
`;

export default Polls;
