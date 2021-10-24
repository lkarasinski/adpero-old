import React, { useEffect, useState } from "react";
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from "next-firebase-auth";
import Dashboard from "components/Templates/Dashboard";
import Layout from "components/Templates/Layout";
import firebase from "firebase/app";
import "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { Expense } from "utils/interfaces";
import mockDashboardData from "utils/functions/mockDashboardData";

const journeysRef = firebase.firestore().collection("journeys");

const Home: React.FC = () => {
    const mockData = mockDashboardData();
    const AuthUser = useAuthUser();
    const email = AuthUser.email ?? "";
    const dataQuery = journeysRef.where("users", "array-contains", email);
    const [collectionData, loading] = useCollection(dataQuery);
    const [data, setData] = useState(mockData);

    useEffect(() => {
        if (!loading && collectionData && email) {
            const journeyData = collectionData.docs.map((data) => ({
                label: data.data().name,
                details: data
                    .data()
                    .expenses.map((expense: Expense) => expense.title),
                id: data.ref.id,
            }));
            const displayData = {
                polls: data.polls,
                journeys: journeyData,
            };
            setData(displayData);
        }
    }, [loading, collectionData]);

    if (loading) return <Layout />;

    return (
        <Layout>
            <Dashboard {...data} userID={"1243"} />
        </Layout>
    );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Home);
