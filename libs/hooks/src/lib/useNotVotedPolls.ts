import { useAuth } from "@adpero/contexts";
import { useJourneys } from "@adpero/contexts";

const useNotVotedPolls = () => {
    const { journeys } = useJourneys();
    const { user } = useAuth();

    const allPolls = journeys.map((j) => j.data.polls).flat();
    const allPollsWithOptions = allPolls.filter((p) => p.content.length !== 0);
    const notVotedPolls = allPollsWithOptions.filter(
        (poll) =>
            poll.votes.filter((votes) => {
                return votes.user === user?.email ?? "";
            }).length === 0
    );

    return notVotedPolls;
};

export default useNotVotedPolls;
