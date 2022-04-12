import * as React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useJourneys } from "@adpero/contexts";
import JoinPanel from "../../components/JoinPanel";

const InvitePage: NextPage = () => {
    const { useJoinJourney } = useJourneys();
    const router = useRouter();
    const inviteID = router.query.inviteID as string;
    const { error, joinFunction } = useJoinJourney(inviteID);

    const handleClick = async () => {
        if (joinFunction) {
            const journeyID = await joinFunction();
            router.push(`/journeys/${journeyID}`);
        }
    };

    return <JoinPanel handleClick={handleClick} error={error} />;
};

export default InvitePage;
