import React from "react";
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from "next-firebase-auth";
import Dashboard from "components/Templates/Dashboard";
import useDashboardData from "hooks/useDashboardData";

const Home: React.FC = () => {
    const AuthUser = useAuthUser();
    const email = AuthUser.email ?? "";
    const [journeys] = useDashboardData(email);

    if (!journeys) return null;

    return <Dashboard journeys={journeys} polls={[]} userID={AuthUser.id} />;
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Home);
