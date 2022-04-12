import { doc, setDoc } from "firebase/firestore";
import { CreateJourney } from "../types";

export const createJourney: CreateJourney = async ({ data, database }) => {
    if (!database) {
        throw new Error("Database is required when creating an online journey");
    }

    const randomID = Math.random().toString(36).substring(2, 15);
    data.id = randomID;
    await setDoc(doc(database, "journeys", randomID), data);
    return randomID;
};

export default createJourney;
