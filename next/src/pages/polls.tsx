import React from "react";
import { withAuthUser, withAuthUserTokenSSR } from "next-firebase-auth";
import Head from "next/head";
import { motion } from "framer-motion";

const Polls: React.FC = () => {
    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: "linear" }}
        >
            <Head>
                <title>Adpero - Polls</title>
            </Head>
        </motion.div>
    );
};

const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Polls);
