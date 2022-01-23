import * as React from 'react';
import CardsPanel from 'components-ui/Organisms/CardsPanel';
import { useAuth } from 'context/AuthContext';
import type { NextPage } from 'next';
import NotLoggedInBanner from 'components-ui/Molecules/NotLoggedInBanner';
import Heading from 'components-ui/Atoms/Heading';
import useJourneyCards from 'hooks/useJourneyCards';
import PageTransitionAnimation from 'components-ui/Atoms/PageTransitionAnimation';
import Head from 'next/head';

const Home: NextPage = () => {
    const { user } = useAuth();
    const journeyCards = useJourneyCards();

    // TODO
    const [isBannerOpen, setIsBannerOpen] = React.useState(
        !user?.email && false
    );

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
                <CardsPanel label="Your journeys" cards={journeyCards} />
            </PageTransitionAnimation>
        </>
    );
};

export default Home;
