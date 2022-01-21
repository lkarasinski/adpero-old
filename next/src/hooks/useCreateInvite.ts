import "firebase/firestore";
import firebase from "services/firebase";
import { useEffect, useState } from "react";

const invitesRef = firebase.firestore().collection("invites");
const journeysRef = firebase.firestore().collection("journeys");

type CreateInvite = (
    userEmail: string,
    journeyID: string,
    setLink?: React.Dispatch<React.SetStateAction<string>>
) => void;

const createInvite: CreateInvite = async (userEmail, journeyID, setLink) => {
    const journeyData = await journeysRef.doc(journeyID).get();
    if (journeyData.exists) {
        const docData = journeyData.data();
        if (docData?.author === userEmail) {
            const inviteData = await invitesRef
                .where("journeyID", "==", journeyID)
                .get();
            inviteData.forEach((doc: any) => doc.ref.delete());

            const docRef = await invitesRef.add({
                createdAt: new Date(),
                journeyID: journeyID,
            });
            if (setLink) {
                setLink(docRef.id);
            }
        }
    }
};

type FunctionType = () => void;
type UseInvitePanel = (
    journeyID: string,
    userEmail: string
) => [string, FunctionType, boolean];
const useInvitePanel: UseInvitePanel = (userEmail, journeyID) => {
    const [linkID, setLinkID] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const invitesData = await invitesRef
                .where("journeyID", "==", journeyID)
                .get();
            invitesData.forEach((doc) => {
                setLinkID(doc.id);
            });
            setLoading(false);
        })();
    }, []);

    return [
        linkID,
        () => createInvite(userEmail, journeyID, setLinkID),
        loading,
    ];
};

export default useInvitePanel;
