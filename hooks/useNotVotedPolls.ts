import { useAuth } from "context/AuthContext";
import useJourneys from "context/JourneysContext";
import * as React from "react";

const useNotVotedPolls = () => {
    const { journeys } = useJourneys();
    const { user } = useAuth();

    const notVotedPolls = React.useMemo(() => {
        const allPolls = journeys.map((j) => j.data.polls).flat();
        return allPolls.filter(
            (allPolls) =>
                allPolls.votes.filter(
                    (votes) => votes.user === user?.email ?? ""
                ).length === 0
        );
    }, [journeys, user?.email]);

    return notVotedPolls;
};

export default useNotVotedPolls;
