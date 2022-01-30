import * as React from "react";
import PageTransitionAnimation from "components-ui/Atoms/PageTransitionAnimation";
import useJourneys from "context/JourneysContext";
import type { NextPage } from "next";
import Card from "components-ui/Atoms/Card";
import Label from "components-ui/Atoms/Label";
import Link from "next/link";
import router from "next/router";
import styled from "styled-components";
import Button from "components-ui/Atoms/Button";
import { getEmptyPoll } from "utils/constants";
import Heading from "components-ui/Atoms/Heading";
import Grid from "components-ui/Atoms/Grid";
import useMobile from "hooks/useMobile";

const Polls: NextPage = () => {
    const { getCurrentJourney, updateJourney } = useJourneys();
    const journey = getCurrentJourney();
    const isMobile = useMobile();

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
            <TopContainer>
                <Heading>{`${journey.data.name} - Polls:`}</Heading>
                <StyledButton
                    isMobile={isMobile}
                    color="primary"
                    type="button"
                    onClick={createNewPoll}
                >
                    Create new Poll
                </StyledButton>
            </TopContainer>
            <Grid isMobile={isMobile}>
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
            </Grid>
        </PageTransitionAnimation>
    );
};

const StyledButton = styled(Button)<{ isMobile: boolean }>`
    ${({ isMobile }) => (isMobile ? "width: 100%;" : null)}
`;

const TopContainer = styled.div`
    margin-bottom: 2rem;
`;

const StyledCard = styled(Card)`
    cursor: pointer;
`;

export default Polls;
