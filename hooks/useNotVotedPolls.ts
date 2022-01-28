import { useAuth } from "context/AuthContext";
import useJourneys from "context/JourneysContext";

const useNotVotedPolls = () => {
    const { journeys } = useJourneys();
    const { user } = useAuth();

    const allPolls = journeys.map((j) => j.data.polls).flat();
    const notVotedPolls = allPolls.filter(
        (allPolls) =>
            allPolls.votes.filter((votes) => votes.user === user?.email ?? "")
                .length === 0
    );

    return notVotedPolls;
};

export default useNotVotedPolls;
