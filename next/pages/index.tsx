import React, { useEffect, useState } from "react";
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from "next-firebase-auth";
import Dashboard from "components/Templates/Dashboard";
import firebase from "firebase/app";
import "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { Expense } from "utils/interfaces";
import mockDashboardData from "utils/functions/mockDashboardData";
import Layout from "components/Templates/Layout";

const journeysRef = firebase.firestore().collection("journeys");

const Home: React.FC = () => {
    const mockData = mockDashboardData();
    const AuthUser = useAuthUser();
    const email = AuthUser.email ?? "";
    const dataQuery = journeysRef.where("users", "array-contains", email);
    const [collectionData, loading] = useCollection(dataQuery);
    const [data, setData] = useState(mockData);

    // Load data from local storage
    useEffect(() => {
        const localStorageDashboardData = localStorage.getItem("dashboardData");
        if (localStorageDashboardData) {
            const dashboardData = JSON.parse(localStorageDashboardData);
            if (dashboardData) {
                setData(dashboardData);
            }
        }
    }, []);

    // Load data from database, set local storage to that data
    useEffect(() => {
        if (!loading && collectionData && email) {
            const journeyData = collectionData.docs.map((data) => ({
                label: data.data().name,
                details: data
                    .data()
                    .expenses.map((expense: Expense) => expense.title),
                id: data.ref.id,
            }));
            const dashboardData = {
                polls: data.polls,
                journeys: journeyData,
            };
            setData(dashboardData);
            localStorage.setItem(
                "dashboardData",
                JSON.stringify(dashboardData)
            );

            const localStorageJourneysData = collectionData.docs.map(
                (data) => ({
                    ...data.data(),
                    id: data.ref.id,
                })
            );

            localStorage.setItem(
                "journeysData",
                JSON.stringify(localStorageJourneysData)
            );
        }
    }, [loading, collectionData]);

    return (
        <Layout>
            <Dashboard {...data} userID={AuthUser.id} />
        </Layout>
    );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Home);
