import { useEffect, useState } from "react";
import { firebaseApp } from "@adpero/firebase";
import {
    collection,
    deleteDoc,
    doc,
    getDocs,
    getFirestore,
    query,
    setDoc,
    where,
} from "firebase/firestore";
import { Journey } from "@adpero/interfaces";
import { getRandomID } from "@adpero/functions";

type CreateInvite = (
    journey: Journey | undefined,
    userEmail: string,
    setLink?: React.Dispatch<React.SetStateAction<string>>
) => void;

const createInvite: CreateInvite = async (journey, userEmail, setLink) => {
    if (journey) {
        if (
            journey.author === userEmail ||
            journey.editors.includes(userEmail)
        ) {
            const journeyID = journey.id;
            const database = getFirestore(firebaseApp);
            const q = query(
                collection(database, "invites"),
                where("journeyID", "==", journeyID)
            );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach(async (doc) => {
                try {
                    await deleteDoc(doc.ref);
                } catch (err) {
                    console.error("Error deleting invites", err);
                }
            });

            const randomString = getRandomID();
            try {
                await setDoc(doc(database, `invites`, randomString), {
                    journeyID,
                    createdAt: new Date(),
                });
                if (setLink) {
                    setLink(randomString);
                }
            } catch (err) {
                console.error("Error creating invite");
                console.error(err);
            }
        }
    }
};

type FunctionType = () => void;
type UseInvitePanel = (
    journey: Journey | undefined,
    userEmail: string
) => [string, FunctionType, boolean];
export const useInvitePanel: UseInvitePanel = (journey, userEmail) => {
    const [linkID, setLinkID] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (journey !== undefined) {
            const database = getFirestore(firebaseApp);
            const q = query(
                collection(database, "invites"),
                where("journeyID", "==", journey.id)
            );
            (async () => {
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    setLinkID(doc.id);
                });
                setLoading(false);
            })();
        }
    }, [journey?.id]);

    return [linkID, () => createInvite(journey, userEmail, setLinkID), loading];
};

export default useInvitePanel;
