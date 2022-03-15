import { doc, updateDoc } from "firebase/firestore";
import { UpdateJourney } from "../types";

export const updateJourney: UpdateJourney = async ({ id, data, database }) => {
    if (database === undefined) {
        throw new Error("Database is required when updating an online journey");
    }
    const journeyRef = doc(database, "journeys", id);
    const newData = JSON.parse(JSON.stringify(data));
    await updateDoc(journeyRef, newData);
};

export default updateJourney;
