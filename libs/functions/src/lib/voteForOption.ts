import { Journey, Poll, Vote } from "@adpero/interfaces";
interface Props {
    optionId: string;
    journey: Journey;
    poll: Poll;
    userEmail: string;
    updateJourney: (data: Journey, id: string) => Promise<void>;
}

export const voteForOption = async ({
    optionId,
    userEmail,
    journey,
    poll,
    updateJourney,
}: Props) => {
    if (userEmail && journey && poll) {
        const newVote: Vote = { user: userEmail, id: optionId };
        const newPoll = poll.votes.filter((vote) => vote.user !== userEmail);
        newPoll.push(newVote);
        const newJourney = {
            ...journey,
            polls: journey.polls.map((p) =>
                p.id === poll.id ? { ...p, votes: newPoll } : p
            ),
        };

        await updateJourney(newJourney, journey.id);
    }
};
