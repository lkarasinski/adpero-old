import React, { useState } from "react";
import Heading from "components/Atoms/Heading";
import NotLoggedInBanner from "components/Molecules/NotLoggedInBanner";
import CardsPanel from "components/Organisms/CardsPanel";
import { AuthUserContext } from "next-firebase-auth";
import { IPollCard } from "components/Molecules/PollCard";
import { IJourneyCard } from "components/Molecules/JourneyCard";

interface Props {
    userID: string | null;
    polls: IPollCard[];
    journeys: IJourneyCard[];
    recentlyChangedJourneys: IJourneyCard[];
}

const Dashboard: React.FC<Props> = ({
    userID,
    polls,
    journeys,
    recentlyChangedJourneys,
}) => {
    const [isBannerOpen, setIsBannerOpen] = useState(!userID);
    return (
        <>
            {isBannerOpen && (
                <NotLoggedInBanner
                    closeFunction={() => setIsBannerOpen(false)}
                />
            )}
            <Heading>Dashboard</Heading>
            <CardsPanel
                label="Polls you haven't voted in yet"
                elements={polls}
            />
            <CardsPanel
                label="Recently changed journeys"
                elements={recentlyChangedJourneys}
            />
            <CardsPanel label="Your journeys" elements={journeys} />
        </>
    );
};

export default Dashboard;
