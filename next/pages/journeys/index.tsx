import React from "react";
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from "next-firebase-auth";

const Journeys: React.FC = () => {
    const AuthUser = useAuthUser();

    return <></>;
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Journeys);
