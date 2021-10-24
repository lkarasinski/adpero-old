import React, { useState } from "react";
import Heading from "components/Atoms/Heading";
import NotLoggedInBanner from "components/Molecules/NotLoggedInBanner";
import CardsPanel from "components/Organisms/CardsPanel";
import { IPollCard } from "components/Molecules/PollCard";
import { IJourneyCard } from "components/Molecules/JourneyCard";
import LogInButton from "components/Molecules/LogInButton";

interface Props {
    userID: string | null;
    polls: IPollCard[];
    journeys: IJourneyCard[];
}

const Dashboard: React.FC<Props> = ({ userID, polls, journeys }) => {
    const [isBannerOpen, setIsBannerOpen] = useState(!userID);
    return (
        <>
            {isBannerOpen && (
                <NotLoggedInBanner
                    closeFunction={() => setIsBannerOpen(false)}
                />
            )}
            <Heading>Dashboard</Heading>
            <CardsPanel label="Polls you haven't voted in yet" cards={polls} />
            <CardsPanel label="Your journeys" cards={journeys} />
            <LogInButton />
        </>
    );
};

export default Dashboard;
