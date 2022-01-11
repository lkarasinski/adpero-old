import { useEffect, useState } from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import firebase from "firebase/app";
import "firebase/firestore";
import { Journey, Poll } from "utils/interfaces";
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
    const journeyRef = journeysRef.doc(id);
    const [journeyDocumentData, journeyLoading] = useDocument(journeyRef);
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
        // If user is not logged in show only offline data
        if (!auth.email) {
            send("NOT_LOGGED_IN");
            return;
        }

        if (journeyDocumentData && pollsCollectionData) {
            const journey = journeyDocumentData.data();

            // If journey exists in the database show it, else show offline data
            if (journey) {
                const polls = pollsCollectionData.docs.map((data) =>
                    data.data()
                );
                const journeyData: any = {
                    ...journey,
                    polls,
                    id: journeyDocumentData.id,
                    createdAt: new Date(journey.createdAt.seconds * 1000),
                    startDate: new Date(journey.startDate.seconds * 1000),
                    endDate: new Date(journey.endDate.seconds * 1000),
                };

                if (!journey && !data) {
                    send("NO_DATA");
                    return;
                }

                // Check for access permission
                if (
                    journeyData.users.includes(auth.email) ||
                    journeyData.author === "local"
                ) {
                    // Update local storage and show data
                    const journeysStorage = JSON.parse(
                        localStorage.getItem("journeysData") ?? "{}"
                    );

                    journeysStorage[storageID] = journeyData;
                    localStorage.setItem(
                        "journeysData",
                        `${JSON.stringify(journeysStorage)}`
                    );

                    setData(journeyData);
                    send("LOAD_FROM_DATABASE");
                } else {
                    send("NO_ACCESS");
                }
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
