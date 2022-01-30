import * as React from "react";
import type { NextPage } from "next";
import useJourneys from "context/JourneysContext";
import { useRouter } from "next/router";
import JoinPanel from "components/JoinPanel";
import PageTransitionAnimation from "components-ui/Atoms/PageTransitionAnimation";

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

    return (
        <PageTransitionAnimation>
            <JoinPanel handleClick={handleClick} error={error} />
        </PageTransitionAnimation>
    );
};

export default InvitePage;
