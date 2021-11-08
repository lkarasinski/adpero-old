import React from "react";
import { withAuthUser, withAuthUserTokenSSR } from "next-firebase-auth";
import Head from "next/head";

const Polls: React.FC = () => {
    return (
        <>
            <Head>
                <title>Adpero - Polls</title>
            </Head>
        </>
    );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Polls);
