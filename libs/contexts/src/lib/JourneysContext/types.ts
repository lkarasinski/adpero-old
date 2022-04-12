import { Journey, JourneyDataType } from "@adpero/interfaces";
import { User } from "firebase/auth";
import type { Firestore } from "firebase/firestore";

export type JourneysDataType = JourneyDataType[];

export type DeleteJourney = (props: {
    id: string;
    database?: Firestore;
    setLocalJourneys?: (value: React.SetStateAction<JourneysDataType>) => void;
}) => Promise<void>;
export type UpdateJourney = (props: {
    id: string;
    data: Journey;
    database?: Firestore;
    setLocalJourneys?: (value: React.SetStateAction<JourneysDataType>) => void;
}) => Promise<void>;
export type CreateJourney = (props: {
    data: Journey;
    database?: Firestore;
    setLocalJourneys?: (value: React.SetStateAction<JourneysDataType>) => void;
}) => Promise<string>;
export type GetCurrentJourney = (props: {
    journeys: JourneysDataType;
    query: string;
}) => JourneyDataType | undefined;
export type JoinFunction = (() => Promise<string>) | null;
export type UseJoinJourney = (props: {
    id: string;
    database: Firestore;
    user: User;
}) => {
    error: JoinJourneyErrors;
    joinFunction: JoinFunction;
};

export type JoinJourneyErrors =
    | "You have already joined this journey"
    | "Journey does not exist"
    | "Invite does not exist"
    | "You must be logged in to accept invites"
    | ""
    | null;

export type ContextReturnType = {
    journeys: JourneysDataType;
    createJourney: (data: Journey) => Promise<string>;
    getCurrentJourney: () => JourneyDataType | undefined;
    updateJourney: (data: Journey, id: string) => Promise<void>;
    deleteJourney: (id: string) => Promise<void>;
    useJoinJourney: (id: string) => {
        error: JoinJourneyErrors;
        joinFunction: JoinFunction;
    };
};

export type UseJourneysManager = () => ContextReturnType;
