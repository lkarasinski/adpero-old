import React, { useEffect, useState } from "react";
import { withAuthUser, withAuthUserTokenSSR } from "next-firebase-auth";
import Layout from "components/Templates/Layout";
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

    useEffect(() => {
        if (journeyDocumentData && pollsCollectionData) {
            const dbData = journeyDocumentData.data();
            const polls = pollsCollectionData.docs.map((data) => ({
                label: data.data().title,
                notification: true,
            }));
            if (dbData) {
                const temp = {
                    journeyName: dbData.name,
                    totalCost: { value: 90, currency: "JPG" },
                    startDate: "06.09.2021",
                    endDate: "12.09.2021",
                    users: dbData.users,
                    expenses: dbData.expenses,
                    polls: polls,
                };
                setJourneyData(temp);
            }
        }
    }, [
        journeyDocumentData,
        journeyLoading,
        pollsCollectionData,
        pollsLoading,
    ]);

    if (journeyLoading || pollsLoading) return <Layout />;

    return (
        <Layout>
            <Journey {...journeyData} />
        </Layout>
    );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(JourneyPage);
