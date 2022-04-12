import {
    collection,
    query,
    where,
    getDocs,
    deleteDoc,
    doc,
} from "firebase/firestore";
import { DeleteJourney } from "../types";

export const deleteJourney: DeleteJourney = async ({ id, database }) => {
    if (database === undefined) {
        throw new Error("Database is required when deleting an online journey");
    }
    const invitesRef = collection(database, "invites");
    const q = query(invitesRef, where("journeyID", "==", id));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (doc) => {
        console.log(doc);
        console.log(doc.ref);
        console.log(doc.ref.id);
        await deleteDoc(doc.ref);
    });
    await deleteDoc(doc(database, "journeys", id));
};

export default deleteJourney;
