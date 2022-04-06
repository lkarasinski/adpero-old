import * as React from "react";
import type { NextPage } from "next";
import styled from "styled-components";
import { Heading, DetailsCard, Label, Button, Grid, Text } from "@adpero/ui";
import { useRouter } from "next/router";
import { useAuth, useJourneys } from "@adpero/contexts";
import { dashboardTheme } from "@adpero/themes";
import { voteForOption } from "@adpero/functions";

const PollPage: NextPage = () => {
    const router = useRouter();
    const pollID = router.query.pollID as string;
    const { user } = useAuth();
    const { journeys, updateJourney } = useJourneys();
    const journey = journeys.find((journey) =>
        journey.data.polls.some((poll) => poll.id === pollID)
    )?.data;
    const currentPoll = journey?.polls.find((poll) => poll.id === pollID);

    const userVoteID =
        currentPoll?.votes.find((vote) => vote.user === user?.email)?.id ??
        null;
    const handleVote = React.useCallback(
        (optionId: string) => {
            voteForOption({
                poll: currentPoll,
                optionId,
                userEmail: user.email,
                journey,
                updateJourney,
            });
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [user?.email, journey?.id, currentPoll?.id]
    );

    if (!user?.email || !currentPoll || !journey) return null;
    const hasEditAccess =
        journey.author === user.email || journey.users.includes(user.email);
    const optionsExist = currentPoll.content.length > 0;

    return (
        <div>
            <Heading>{currentPoll.title} </Heading>
            {optionsExist ? (
                <Grid>
                    {currentPoll.content.map((category) => (
                        <DetailsCard expense={category} key={category.id}>
                            <VotePanelContainer>
                                <Text color={dashboardTheme.colors.gray.light}>
                                    Votes:{" "}
                                    {
                                        currentPoll.votes.filter(
                                            (vote) => vote.id === category.id
                                        ).length
                                    }
                                </Text>
                                <StyledButton
                                    type="button"
                                    color={
                                        userVoteID === category.id
                                            ? dashboardTheme.colors.green
                                                  .regular
                                            : dashboardTheme.colors.primary
                                                  .regular
                                    }
                                    onClick={() => handleVote(category.id)}
                                >
                                    {userVoteID === category.id
                                        ? "Voted"
                                        : "Vote for this option"}
                                </StyledButton>
                            </VotePanelContainer>
                        </DetailsCard>
                    ))}
                </Grid>
            ) : (
                <div>
                    <Label>This poll has no options to vote. 😢</Label>
                    <Text>
                        {hasEditAccess
                            ? "You can add options by going into journey edit mode!"
                            : "Ask editors or author of the journey to add some!"}
                    </Text>
                </div>
            )}
        </div>
    );
};

const VotePanelContainer = styled.div`
    margin-top: 1rem;
`;

const StyledButton = styled(Button)`
    margin-top: 0.5rem;
    width: 100%;
`;

export default PollPage;
