import { useEffect, useState } from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import firebase from "firebase/app";
import "firebase/firestore";
import { Journey } from "utils/interfaces";
import { createMachine, StateValue } from "xstate";
import { useMachine } from "@xstate/react";
import getLocalStorageData from "functions/getLocalStorageData";

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
                NOT_LOGGED_IN: "notLoggedIn",
            },
        },
        notLoggedIn: {
            type: "final",
        },
        noData: {
            on: {
                LOAD_FROM_DATABASE: "database",
                NO_ACCESS: "noAccess",
                NOT_LOGGED_IN: "notLoggedIn",
            },
        },
        noAccess: { type: "final" },
        localStorage: {
            on: {
                LOAD_FROM_DATABASE: "database",
                NO_DATA: "noData",
                NO_ACCESS: "noAccess",
                NOT_LOGGED_IN: "notLoggedIn",
            },
        },
        database: { type: "final" },
    },
});

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
        const data = getLocalStorageData();
        if (data[storageID]) {
            setData(data[storageID]);
            send("LOAD_FROM_LOCAL_STORAGE");
        } else {
            send("NO_DATA");
        }
    }, []);

    // Load data from database, update local storage
    useEffect(() => {
        console.log(auth.email);
        if (!auth.email) {
            send("NOT_LOGGED_IN");
            return;
        }

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

            journeyData.createdAt = new Date(
                journeyData.createdAt.seconds * 1000
            );
            journeyData.startDate = new Date(
                journeyData.startDate.seconds * 1000
            );
            journeyData.endDate = new Date(journeyData.endDate.seconds * 1000);

            if (journeyData.users.includes(auth.email)) {
                const journeysStorage =
                    localStorage.getItem("journeysData") ?? "{}";
                console.log(journeyData);

                const journeysDataFromLocalStorage =
                    JSON.parse(journeysStorage);

                journeysDataFromLocalStorage[storageID] = journeyData;
                localStorage.setItem(
                    "journeysData",
                    `${JSON.stringify(journeysDataFromLocalStorage)}`
                );

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
