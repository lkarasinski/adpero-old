import React, { useEffect, useState } from "react";
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from "next-firebase-auth";
import firebase from "firebase/app";
import "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import CardsPanel from "components/Organisms/CardsPanel";
import { Expense } from "utils/interfaces";
import { IJourneyCard } from "components/Molecules/JourneyCard";

const journeysRef = firebase.firestore().collection("journeys");

const Journeys: React.FC = () => {
    const AuthUser = useAuthUser();
    const email = AuthUser.email;
    const dataQuery = journeysRef.where("users", "array-contains", email);
    const [collectionData, loading] = useCollection(dataQuery);
    const [journeys, setJourneys] = useState<IJourneyCard[]>();

    useEffect(() => {
        console.log(loading);
        if (collectionData) {
            const journeyData = collectionData.docs.map((data) => ({
                label: data.data().name,
                details: data
                    .data()
                    .expenses.map((expense: Expense) => expense.title),
                id: data.ref.id,
            }));
            setJourneys(journeyData);
        }
    }, [loading]);

    if (loading || !journeys) return null;
    return (
        <>
            <CardsPanel label="Your journeys" cards={journeys} />
        </>
    );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Journeys);
