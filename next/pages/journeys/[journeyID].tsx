import React, { useEffect, useState } from "react";
import { withAuthUser, withAuthUserTokenSSR } from "next-firebase-auth";
import Journey from "components/Templates/Journey";
import getJourneyData from "utils/functions/getJourneyData";
import firebase from "firebase/app";
import "firebase/firestore";
import { useRouter } from "next/router";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";

const journeysRef = firebase.firestore().collection("journeys");
const pollsRef = firebase.firestore().collection("polls");

const JourneyPage: React.FC = () => {
    const router = useRouter();
    const journeyID = router.query.journeyID as string;
    const journey = journeysRef.doc(journeyID);
    const [journeyDocumentData, journeyLoading] = useDocument(journey);
    const [journeyData, setJourneyData] = useState(getJourneyData());
    const pollsQuery = pollsRef.where("id", "==", journeyID);
    const [pollsCollectionData, pollsLoading] = useCollection(pollsQuery);

    const formJoruneyData = (joruney: any, polls: any) => ({
        journeyName: joruney.name,
        totalCost: { value: 90, currency: "JPG" },
        startDate: "06.09.2021",
        endDate: "12.09.2021",
        users: joruney.users,
        expenses: joruney.expenses,
        polls: polls,
    });

    // Load data from local storage
    useEffect(() => {
        const data = localStorage.getItem("journeysData");
        if (data) {
            const journeyDataFromLocalStorage = JSON.parse(data).find(
                (journey: any) => journey.id === journeyID
            );
            setJourneyData(formJoruneyData(journeyDataFromLocalStorage, []));
        }
    }, []);

    // Load data from database
    useEffect(() => {
        if (journeyDocumentData && pollsCollectionData) {
            const dbData = journeyDocumentData.data();
            const polls = pollsCollectionData.docs.map((data) => ({
                label: data.data().title,
                notification: true,
            }));
            if (dbData) {
                setJourneyData(formJoruneyData(dbData, polls));
            }
        }
    }, [
        journeyDocumentData,
        journeyLoading,
        pollsCollectionData,
        pollsLoading,
    ]);

    return <Journey {...journeyData} />;
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(JourneyPage);
