import React, { useState } from "react";
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from "next-firebase-auth";
import useDashboardData from "hooks/useDashboardData";
import Heading from "components-ui/Atoms/Heading";
import NotLoggedInBanner from "components-ui/Molecules/NotLoggedInBanner";
import CardsPanel from "components-ui/Organisms/CardsPanel";
import Head from "next/head";

const Dashboard: React.FC = () => {
    const AuthUser = useAuthUser();
    const email = AuthUser.email ?? "";
    const [journeys] = useDashboardData(email);
    const [isBannerOpen, setIsBannerOpen] = useState(!AuthUser.id);

    if (!journeys) return null;

    return (
        <>
            <Head>
                <title>Adpero - Dashboard</title>
            </Head>
            {isBannerOpen && (
                <NotLoggedInBanner
                    closeFunction={() => setIsBannerOpen(false)}
                />
            )}
            <Heading>Dashboard</Heading>
            <CardsPanel label="Polls you haven't voted in yet" cards={[]} />
            <CardsPanel label="Your journeys" cards={journeys} />
        </>
    );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Dashboard);
