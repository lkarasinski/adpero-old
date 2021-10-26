import React from "react";
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from "next-firebase-auth";
import Layout from "components/Templates/Layout";

const Polls: React.FC = () => {
    const AuthUser = useAuthUser();

    return <></>;
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Polls);
