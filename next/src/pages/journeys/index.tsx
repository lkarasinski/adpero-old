import React from "react";
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from "next-firebase-auth";
import CardsPanel from "components-ui/Organisms/CardsPanel";
import useDashboardData from "hooks/useDashboardData";
import Head from "next/head";
import { motion } from "framer-motion";

const Journeys: React.FC = () => {
    const AuthUser = useAuthUser();
    const email = AuthUser.email;
    const [journeys] = useDashboardData(email);

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: "linear" }}
        >
            <Head>
                <title>Adpero - Journeys</title>
            </Head>
            {journeys ? (
                <CardsPanel label="Your journeys" cards={journeys} />
            ) : null}
        </motion.div>
    );
};

const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Journeys);
