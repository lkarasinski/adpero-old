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
                NO_DATA: "noData",
                NO_ACCESS: "noAccess",
            },
        },
        noData: {
            on: {
                LOAD_FROM_DATABASE: "database",
                NO_ACCESS: "noAccess",
            },
        },
        noAccess: { type: "final" },
        localStorage: {
            on: {
                LOAD_FROM_DATABASE: "database",
                NO_DATA: "noData",
                NO_ACCESS: "noAccess",
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
const useJourneyData = (id: string, auth: any): [Journey, StateValue] => {
    const journey = journeysRef.doc(id);
    const [journeyDocumentData, journeyLoading] = useDocument(journey);
    const [data, setData] = useState<any>();
    const pollsQuery = pollsRef.where("id", "==", id);
    const [pollsCollectionData, pollsLoading] = useCollection(pollsQuery);
    const [current, send] = useMachine(loadingMachine);
    const storageID = `journey-${id}`;

    // Log state changes
    useEffect(() => console.log(current.value), [current]);

    // Load data from local storage
    useEffect(() => {
        const storageData = localStorage.getItem("journeysData");
        const parsedData = JSON.parse(storageData ?? "{}");
        if (parsedData[storageID]) {
            setData(parsedData[storageID]);
            send("LOAD_FROM_LOCAL_STORAGE");
        } else {
            send("NO_DATA");
        }
    }, []);

    // Load data from database, update local storage
    useEffect(() => {
        if (journeyDocumentData && pollsCollectionData) {
            const journey = journeyDocumentData.data();
            const polls = pollsCollectionData.docs.map((data) => data.data());
            const journeyData: any = {
                ...journey,
                polls,
                id: journeyDocumentData.id,
            };

            if (!journey) {
                send("NO_DATA");
                return;
            }

            if (journeyData.users.includes(auth.email)) {
                const journeysStorage =
                    localStorage.getItem("journeysData") ?? "{}";

                const journeysDataFromLocalStorage =
                    JSON.parse(journeysStorage);
                const journeyDataFromLocalStorage =
                    journeysDataFromLocalStorage[storageID];

                if (!journeyDataFromLocalStorage) {
                    journeysDataFromLocalStorage[storageID] = journeyData;
                    localStorage.setItem(
                        "journeysData",
                        `${JSON.stringify(journeysDataFromLocalStorage)}`
                    );
                }

                setData(journeyData);
                send("LOAD_FROM_DATABASE");
            } else {
                send("NO_ACCESS");
            }
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
