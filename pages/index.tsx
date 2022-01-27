import * as React from "react";
import CardsPanel from "components-ui/Organisms/CardsPanel";
import { useAuth } from "context/AuthContext";
import type { NextPage } from "next";
import NotLoggedInBanner from "components-ui/Molecules/NotLoggedInBanner";
import Heading from "components-ui/Atoms/Heading";
import useJourneyCards from "hooks/useJourneyCards";
import PageTransitionAnimation from "components-ui/Atoms/PageTransitionAnimation";
import Head from "next/head";
import useNotVotedPolls from "hooks/useNotVotedPolls";

const Home: NextPage = () => {
    const { user } = useAuth();
    const [currentJourneys, upcomingJourneys, pastJourneys, futureJourneys] =
        useJourneyCards();
    const polls = useNotVotedPolls();

    // TODO
    const [isBannerOpen, setIsBannerOpen] = React.useState(
        !user?.email && false
    );

    console.log(polls);

    return (
        <>
            <Head>
                <title>Adpero</title>
            </Head>
            <PageTransitionAnimation>
                {isBannerOpen && (
                    <NotLoggedInBanner
                        closeFunction={() => setIsBannerOpen(false)}
                    />
                )}
                <Heading>Dashboard</Heading>
                <CardsPanel label="Current journeys" cards={currentJourneys} />
                <CardsPanel
                    label="Polls you haven't voted in yet"
                    cards={polls}
                />
                <CardsPanel
                    label="Upcoming journeys"
                    cards={upcomingJourneys}
                />
                <CardsPanel label="Past journeys" cards={pastJourneys} />
                <CardsPanel label="Future journeys" cards={futureJourneys} />
            </PageTransitionAnimation>
        </>
    );
};

export default Home;
