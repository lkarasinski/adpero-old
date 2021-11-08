import React from "react";
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from "next-firebase-auth";
import "firebase/firestore";
import CardsPanel from "components-ui/Organisms/CardsPanel";
import useDashboardData from "hooks/useDashboardData";
import Head from "next/head";

const Journeys: React.FC = () => {
    const AuthUser = useAuthUser();
    const email = AuthUser.email;
    const [journeys] = useDashboardData(email);

    return (
        <>
            <Head>
                <title>Adpero - Journeys</title>
            </Head>
            {journeys ? (
                <CardsPanel label="Your journeys" cards={journeys} />
            ) : null}
        </>
    );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Journeys);
