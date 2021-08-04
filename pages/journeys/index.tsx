import React from "react";
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from "next-firebase-auth";
import Layout from "components/Templates/Layout";

const Journeys: React.FC = () => {
    const AuthUser = useAuthUser();

    return <Layout></Layout>;
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Journeys);
