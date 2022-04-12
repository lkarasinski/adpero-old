import * as React from "react";
import { firebaseApp } from "@adpero/firebase";
import { getFirestore } from "firebase/firestore";
import { Journey } from "@adpero/interfaces";
import { UseJourneysManager, JourneysDataType } from "../types";
import { useAuth } from "@adpero/contexts";
import type { Unsubscribe } from "firebase/auth";
import { useRouter } from "next/router";
import { useLocalStorage } from "usehooks-ts";
import getJourneys from "./getJourneys";
import createJourney from "./createJourney";
import createLocalJourney from "./createLocalJourney";
import deleteJourney from "./deleteJourney";
import deleteLocalJourney from "./deleteLocalJourney";
import getCurrentJourney from "./getCurrentJourney";
import updateJourney from "./updateJourney";
import updateLocalJourney from "./updateLocalJourney";
import useJoinJourney from "./useJoinJourney";

const database = getFirestore(firebaseApp);

const useJourneysManager: UseJourneysManager = () => {
    const auth = useAuth();
    const router = useRouter();
    if (auth === undefined) {
        throw new Error("useJourneys must be used within a AuthProvider");
    }
    const { user } = auth;

    const [localJourneys, setLocalJourneys] = useLocalStorage<JourneysDataType>(
        "journeys",
        []
    );
    const [journeys, setJourneys] = React.useState<JourneysDataType>([]);

    React.useEffect(() => {
        let unsubscribe: Unsubscribe | undefined;
        (async () => {
            unsubscribe = await getJourneys({ database, user, setJourneys });
        })();

        return () => unsubscribe?.();
    }, [user, user?.email]);

    if (user === null) {
        return {
            journeys: localJourneys,
            createJourney: (data: Journey) =>
                createLocalJourney({ setLocalJourneys, data }),
            getCurrentJourney: () =>
                getCurrentJourney({
                    journeys: localJourneys,
                    query: router.query["journeyID"] as string,
                }),
            updateJourney: (data: Journey, id: string) =>
                updateLocalJourney({ id, data, setLocalJourneys }),
            deleteJourney: (id: string) =>
                deleteLocalJourney({ setLocalJourneys, id }),
            useJoinJourney: () => {
                return {
                    error: "You must be logged in to accept invites",
                    joinFunction: null,
                };
            },
        };
    }

    return {
        journeys,
        createJourney: (data: Journey) => createJourney({ database, data }),
        getCurrentJourney: () =>
            getCurrentJourney({
                journeys,
                query: router.query["journeyID"] as string,
            }),
        updateJourney: (data: Journey, id: string) =>
            updateJourney({ database, data, id }),
        deleteJourney: (id: string) => deleteJourney({ database, id }),
        useJoinJourney: (id: string) => useJoinJourney({ user, database, id }),
    };
};

export default useJourneysManager;
