import { useEffect, useState } from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import firebase from "firebase/app";
import "firebase/firestore";

const journeysRef = firebase.firestore().collection("journeys");
const pollsRef = firebase.firestore().collection("polls");

type ID = string;
type UseJourneysReturn = [any[]];

/**
 * Hook to get all journeys from firestore and set them to local storage
 * @param {string} userId
 * @return [IJournyCard[], boolean]
 */
const useJourneyData = (id: ID): UseJourneysReturn => {
    const journey = journeysRef.doc(id);
    const [journeyDocumentData, journeyLoading] = useDocument(journey);
    const [data, setData] = useState<any>([]);
    const pollsQuery = pollsRef.where("id", "==", id);
    const [pollsCollectionData, pollsLoading] = useCollection(pollsQuery);

    // Load data from local storage
    useEffect(() => {
        const data = localStorage.getItem("journeysData");
        if (data) {
            const journeyDataFromLocalStorage = JSON.parse(data).find(
                (journey: any) => journey.id === id
            );
            setData(journeyDataFromLocalStorage);
        }
    }, []);

    // Load data from database
    useEffect(() => {
        if (journeyDocumentData && pollsCollectionData) {
            const journey = journeyDocumentData.data();
            const polls = pollsCollectionData.docs.map((data) => data.data());
            setData({ ...journey, polls });
        }
    }, [
        journeyDocumentData,
        journeyLoading,
        pollsCollectionData,
        pollsLoading,
    ]);

    return [data];
};

export default useJourneyData;
