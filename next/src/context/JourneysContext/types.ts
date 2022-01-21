import { Journey } from "utils/interfaces";
import type firebase from "firebase/app";

export type JourneyDataType = {
    id: string;
    ref: firebase.firestore.DocumentReference<firebase.firestore.DocumentData>;
    data: Journey;
};

export type JourneysDataType = {
    [key: string]: JourneyDataType;
};

export type ContextReturnType = {
    journeys: JourneysDataType;
    deleteJourney: (id: string) => void;
    updateJourney: (id: string, data: Journey) => void;
    createJourney: (data: Journey) => void;
};

export type UseJourneysManager = () => ContextReturnType;
