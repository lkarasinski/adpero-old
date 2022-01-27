import * as React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import useJourneys from "context/JourneysContext";
import DetailsCard from "components-ui/Molecules/DetailsCard";
import CardGrid from "components-ui/Templates/CardGrid";
import Button from "components-ui/Atoms/Button";
import Text from "components-ui/Atoms/Text";
import Heading from "components-ui/Atoms/Heading";
import styled from "styled-components";
import { useAuth } from "context/AuthContext";
import { Vote } from "utils/interfaces";
import Label from "components-ui/Atoms/Label";
import PageTransitionAnimation from "components-ui/Atoms/PageTransitionAnimation";

const PollPage: NextPage = () => {
    const router = useRouter();
    const pollID = router.query.pollID as string;
    const { user } = useAuth();
    const { journeys, updateJourney } = useJourneys();
    const journey = journeys.find((journey) =>
        journey.data.polls.some((poll) => poll.id === pollID)
    )?.data;
    const currentPoll = journey?.polls.find((poll) => poll.id === pollID);
    const userVoteID = React.useMemo(() => {
        const vote = currentPoll?.votes.find(
            (vote) => vote.user === user?.email
        );
        return vote?.id ?? null;
    }, [currentPoll, user?.email]);

    if (!user?.email || !currentPoll || !journey) return null;
    const hasEditAccess =
        journey.author === user.email || journey.users.includes(user.email);
    const optionsExist = currentPoll.content.length > 0;

    const voteForOption = async (optionID: string) => {
        if (user.email && journey) {
            const newVote: Vote = { user: user.email, id: optionID };
            const newPoll = currentPoll.votes.filter(
                (vote) => vote.user !== user.email
            );
            newPoll.push(newVote);
            const newJourney = {
                ...journey,
                polls: journey.polls.map((poll) =>
                    poll.id === pollID ? { ...poll, votes: newPoll } : poll
                ),
            };

            await updateJourney(journey.id, newJourney);
        }
    };

    return (
        <PageTransitionAnimation>
            <Heading>{currentPoll.title}</Heading>
            {optionsExist ? (
                <CardGrid>
                    {currentPoll.content.map((category) => (
                        <DetailsCard expense={category} key={category.id}>
                            <VotePanelContainer>
                                <Text>
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
                                            ? "green"
                                            : "primary"
                                    }
                                    onClick={() => voteForOption(category.id)}
                                >
                                    {userVoteID === category.id
                                        ? "You've voted for this option"
                                        : "Vote for this option"}
                                </StyledButton>
                            </VotePanelContainer>
                        </DetailsCard>
                    ))}
                </CardGrid>
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
        </PageTransitionAnimation>
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
