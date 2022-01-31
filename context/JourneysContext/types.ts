import { Journey } from "utils/interfaces";
import type { DocumentData, DocumentReference } from "firebase/firestore";

export type JourneyDataType = {
    id: string;
    ref: DocumentReference<DocumentData> | null;
    data: Journey;
};

export type JourneysDataType = JourneyDataType[];

export type DeleteJourney = (id: string) => Promise<void>;
export type UpdateJourney = (id: string, data: Journey) => Promise<void>;
export type CreateJourney = (data: Journey) => Promise<string>;
export type GetCurrentJourney = () => JourneyDataType | undefined;
export type JoinFunction = (() => Promise<string>) | null;
export type useJoinJourney = (id: string) => {
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
    deleteJourney: DeleteJourney;
    updateJourney: UpdateJourney;
    createJourney: CreateJourney;
    useJoinJourney: useJoinJourney;
    getCurrentJourney: GetCurrentJourney;
};

export type UseJourneysManager = () => ContextReturnType;
