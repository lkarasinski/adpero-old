import { convertToDate } from "@adpero/functions";
import { Journey } from "@adpero/interfaces";
import { Unsubscribe, User } from "firebase/auth";
import {
    query,
    collection,
    where,
    onSnapshot,
    Firestore,
} from "firebase/firestore";
import { JourneysDataType, JourneyDataType } from "../types";

type GetJourneys = (props: {
    user: User | null;
    database: Firestore;
    setJourneys: React.Dispatch<React.SetStateAction<JourneysDataType>>;
}) => Promise<undefined | Unsubscribe>;
export const getJourneys: GetJourneys = async ({
    user,
    database,
    setJourneys,
}) => {
    if (user !== null && user !== undefined) {
        const q = query(
            collection(database, "journeys"),
            where("users", "array-contains", user?.email ?? "")
        );

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const documentJourneys: JourneysDataType = [];
            querySnapshot.forEach((doc) => {
                const documentData = doc.data() as Journey;
                const journey: JourneyDataType = {
                    id: doc.id,
                    ref: doc.ref,
                    data: {
                        ...documentData,
                        createdAt: convertToDate(documentData.createdAt),
                        startDate: convertToDate(documentData.startDate),
                        endDate: convertToDate(documentData.endDate),
                    },
                };
                documentJourneys.push(journey);
            });
            setJourneys(documentJourneys);
        });
        return unsubscribe;
    }
    return undefined;
};

export default getJourneys;
