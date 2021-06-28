import firebase from '../firebase';

const journeysRef = firebase.firestore().collection('journeys');
const invitesRef = firebase.firestore().collection('invites');

/**
 * Deletes journey od ID
 * @param id ID of journey that will be deleted
 */
export const deleteJourney = (id: string): void => {
	journeysRef.doc(id).delete();
	invitesRef
		.where('journeyID', '==', id)
		.get()
		.then((doc) => {
			doc.forEach((doc) => doc.ref.delete());
		});
	return;
};
