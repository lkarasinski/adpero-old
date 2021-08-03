import React from "react";
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from "next-firebase-auth";
import Dashboard from "components/Templates/Dashboard";
import Layout from "components/Templates/Layout";

const polls = [
    { label: "Apartement", detail: "Poznań" },
    { label: "Apartement", detail: "Poznań" },
    { label: "Apartement", detail: "Poznań" },
];

const recentlyChanged = [
    {
        label: "Poznań",
        details: ["Apartament", "Transport", "Komunikacja Miejska"],
    },
    {
        label: "Poznań",
        details: ["Apartament", "Transport", "Komunikacja Miejska"],
    },
    {
        label: "Poznań",
        details: ["Apartament", "Transport", "Komunikacja Miejska"],
    },
    {
        label: "Poznań",
        details: ["Apartament", "Transport", "Komunikacja Miejska"],
    },
];

const journeys = [
    {
        label: "Poznań",
        details: ["Apartament", "Transport", "Komunikacja Miejska"],
    },
    {
        label: "Poznań",
        details: ["Apartament", "Transport", "Komunikacja Miejska"],
    },
    {
        label: "Poznań",
        details: ["Apartament", "Transport", "Komunikacja Miejska"],
    },
    {
        label: "Poznań",
        details: ["Apartament", "Transport", "Komunikacja Miejska"],
    },
];

const Home: React.FC = () => {
    const AuthUser = useAuthUser();

    return (
        <Layout>
            <Dashboard
                userID={AuthUser.id}
                polls={polls}
                journeys={journeys}
                recentlyChangedJourneys={recentlyChanged}
            />
        </Layout>
    );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Home);
