import { useAuth } from "@adpero/contexts";
import { useJourneys } from "@adpero/contexts";
import { Poll, Vote } from "@adpero/interfaces";
import { JourneyDataType } from "@adpero/interfaces";

export const useNotVotedPolls = () => {
    const { journeys } = useJourneys();
    const { user } = useAuth();

    const allPolls = journeys.map((j: JourneyDataType) => j.data.polls).flat();
    const allPollsWithOptions = allPolls.filter(
        (p: Poll) => p.content.length !== 0
    );
    const notVotedPolls = allPollsWithOptions.filter(
        (poll: Poll) =>
            poll.votes.filter((votes: Vote) => {
                return votes.user === user?.email ?? "";
            }).length === 0
    );

    return notVotedPolls;
};
