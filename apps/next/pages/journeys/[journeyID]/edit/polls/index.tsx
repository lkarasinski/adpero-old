import * as React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import router from "next/router";
import styled from "styled-components";
import { Button, Card, Grid, Heading, Label } from "@adpero/ui";
import { useJourneys } from "@adpero/contexts";
import { getEmptyPoll } from "@adpero/functions";
import { mobileScreenSize } from "@adpero/constants";
import { dashboardTheme } from "@adpero/themes";

const Polls: NextPage = () => {
    const { getCurrentJourney, updateJourney } = useJourneys();
    const journey = getCurrentJourney();

    if (!journey) return null;

    const createNewPoll = async () => {
        const emptyPoll = getEmptyPoll();
        const currentPolls = [...journey.data.polls];
        currentPolls.push(emptyPoll);
        journey.data.polls = currentPolls;
        await updateJourney({ ...journey.data }, journey.id);
        router.push(
            `/journeys/${router.query.journeyID}/edit/polls/${emptyPoll.id}`
        );
    };

    return (
        <>
            <TopContainer>
                <Heading>{`Polls: ${journey.data.name}`}</Heading>
                <StyledButton
                    color={dashboardTheme.colors.primary.regular}
                    type="button"
                    onClick={createNewPoll}
                >
                    Create new Poll
                </StyledButton>
            </TopContainer>
            <Grid>
                {journey.data.polls.map((poll) => (
                    <Link
                        href={`/journeys/${router.query.journeyID}/edit/polls/${poll.id}`}
                        key={poll.id}
                        passHref
                    >
                        <StyledCard as={"a"}>
                            <Label>{poll.title}</Label>
                        </StyledCard>
                    </Link>
                ))}
            </Grid>
        </>
    );
};

const StyledButton = styled(Button)`
    @media (max-width: ${mobileScreenSize}px) {
        width: 100%;
    }
`;

const TopContainer = styled.div`
    margin-bottom: 2rem;
`;

const StyledCard = styled(Card)`
    cursor: pointer;
`;

export default Polls;
