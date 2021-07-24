import firebase from "firebase";

const journeysRef = firebase.firestore().collection("journeys");

/**
 * Removes user with email of auth.email from journey of ID
 * @param id - ID of the journey
 * @param auth - Firebase auth object
 * @returns
 */
export const leaveJourney = async (
    id: string,
    auth: firebase.User | null | undefined
) => {
    const docRef = journeysRef.doc(id);
    const journeyData = (await docRef.get()).data();
    const copy = journeyData;
    if (copy?.users.includes(auth?.email)) {
        const newUsers = copy?.users.filter(
            (user: string) => user !== auth?.email
        );
        copy.users = newUsers;
        docRef.update(copy);
    }
    return;
};
