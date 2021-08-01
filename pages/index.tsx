import React from "react";
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from "next-firebase-auth";
import theme from "utils/theme";
import { ThemeProvider } from "styled-components";
import Dashboard from "components/Templates/Dashboard";

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
        <ThemeProvider theme={theme}>
            <Dashboard
                userID={AuthUser.id}
                polls={polls}
                journeys={journeys}
                recentlyChangedJourneys={recentlyChanged}
            />
        </ThemeProvider>
    );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Home);
