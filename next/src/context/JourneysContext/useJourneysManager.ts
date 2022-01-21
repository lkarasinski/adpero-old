import { useAuthUser } from "next-firebase-auth";
import firebase from "services/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { Journey } from "utils/interfaces";
import { UseJourneysManager, JourneyDataType, JourneysDataType } from "./types";
import * as React from "react";

const journeysRef = firebase.firestore().collection("journeys");

const useJourneysManager: UseJourneysManager = () => {
    const { email } = useAuthUser();
    const journeysQuery = journeysRef.where("users", "array-contains", email);
    const [snapshot, loading, error] = useCollection(journeysQuery);
    const [journeys, setJourneys] = React.useState<JourneysDataType>({});

    React.useEffect(() => {
        if (!loading && snapshot) {
            const documentJourneys: JourneysDataType = {};
            snapshot.docs.forEach((doc) => {
                const documentData = doc.data() as Journey;
                const journey: JourneyDataType = {
                    id: doc.id,
                    ref: doc.ref,
                    data: documentData,
                };
                documentJourneys[doc.id] = journey;
            });
            setJourneys(documentJourneys);
        }
    }, [loading]);

    React.useEffect(() => {
        if (error) {
            console.error("Error while loading the journeys");
            throw new Error(error?.message);
        }
    }, [error]);

    return {
        journeys: journeys,
        deleteJourney: (id: string) => {
            id;
            console.log("Not implemented");
        },
        updateJourney: (id: string, data: Journey) => {
            id;
            data;
            console.log("Not implemented");
        },
        createJourney: (data: Journey) => {
            data;
            console.log("Not implemented");
        },
    };
};

export default useJourneysManager;
