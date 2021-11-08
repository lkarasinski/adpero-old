import { useEffect, useState } from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import firebase from "firebase/app";
import "firebase/firestore";
import { Journey } from "utils/interfaces";
import { createMachine, StateValue } from "xstate";
import { useMachine } from "@xstate/react";

const journeysRef = firebase.firestore().collection("journeys");
const pollsRef = firebase.firestore().collection("polls");

const loadingMachine = createMachine({
    id: "state",
    initial: "loading",
    states: {
        loading: {
            on: {
                LOAD_FROM_LOCAL_STORAGE: "localStorage",
                LOAD_FROM_DATABASE: "database",
            },
        },
        localStorage: {
            on: {
                LOAD_FROM_DATABASE: "database",
            },
        },
        database: { type: "final" },
    },
});

/**
 * Hook to get all journeys from firestore and set them to local storage
 * @param {string} userId
 * @return [IJournyCard[], 'loading' | 'localStorage' | 'database']
 */
const useJourneyData = (id: string): [Journey, StateValue] => {
    const journey = journeysRef.doc(id);
    const [journeyDocumentData, journeyLoading] = useDocument(journey);
    const [data, setData] = useState<any>();
    const pollsQuery = pollsRef.where("id", "==", id);
    const [pollsCollectionData, pollsLoading] = useCollection(pollsQuery);
    const [current, send] = useMachine(loadingMachine);

    // Log state changes
    useEffect(() => console.log(current.value), [current]);

    // Load data from local storage
    useEffect(() => {
        const data = localStorage.getItem("journeysData");
        if (data) {
            const journeyDataFromLocalStorage = JSON.parse(data).find(
                (journey: any) => journey.id === id
            );
            setData(journeyDataFromLocalStorage);
            send("LOAD_FROM_LOCAL_STORAGE");
        }
    }, []);

    // Load data from database
    useEffect(() => {
        if (journeyDocumentData && pollsCollectionData) {
            const journey = journeyDocumentData.data();
            const polls = pollsCollectionData.docs.map((data) => data.data());
            setData({ ...journey, polls });
            send("LOAD_FROM_DATABASE");
        }
    }, [
        journeyDocumentData,
        journeyLoading,
        pollsCollectionData,
        pollsLoading,
    ]);

    return [data, current.value];
};

export default useJourneyData;
