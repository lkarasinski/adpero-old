import firebase from "firebase/app";
import "firebase/firestore";
import { useEffect, useState } from "react";

const invitesRef = firebase.firestore().collection("invites");
const journeysRef = firebase.firestore().collection("journeys");

type JoinJourney = (() => Promise<void>) | null;

type UseInvite = (
    inviteID: string,
    userEmail: string | null
) => [boolean, JoinJourney];

const useInvite: UseInvite = (inviteID, userEmail) => {
    const [isAbleToJoin, setIsAbleToJoin] = useState(false);
    const [joinJourney, setJoinJourney] = useState<JoinJourney>(null);

    useEffect(() => {
        (async () => {
            const invitesData = await invitesRef.doc(inviteID).get();
            const journeyID = invitesData.data()?.journeyID;
            const journeyDoc = journeysRef.doc(journeyID);
            const journeyData = await journeyDoc.get();
            const docData = journeyData.data();
            if (docData?.users.includes(userEmail)) {
                setIsAbleToJoin(false);
            } else {
                const joinFunction: JoinJourney = async () =>
                    await journeyDoc.update({
                        users: [...journeyData.data()?.users, userEmail],
                    });
                setJoinJourney(() => joinFunction);
                setIsAbleToJoin(true);
            }
        })();
    }, []);

    return [isAbleToJoin, joinJourney];
};

export default useInvite;
