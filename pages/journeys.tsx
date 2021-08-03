import React from "react";
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from "next-firebase-auth";
import Layout from "components/Templates/Layout";

const Journeys: React.FC = () => {
    const AuthUser = useAuthUser();

    return <Layout photoURL={AuthUser.photoURL}></Layout>;
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Journeys);
