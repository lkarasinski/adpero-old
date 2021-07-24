import firebase from "@firebase";

const journeysRef = firebase.firestore().collection("journeys");
const invitesRef = firebase.firestore().collection("invites");

/**
 * Deletes journey od ID
 * @param id ID of journey that will be deleted
 */
export const deleteJourney = async (id: string) => {
    const invitesDoc = await invitesRef.where("journeyID", "==", id).get();
    journeysRef.doc(id).delete();
    invitesDoc.forEach((invite) => invite.ref.delete());
    return;
};
