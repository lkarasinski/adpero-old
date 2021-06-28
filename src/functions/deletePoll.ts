import firebase from 'firebase';

const pollsRef = firebase.firestore().collection('polls');
/**
 * Deletes poll of ID
 * @param pollID ID of poll that will be deleted
 */
export const deletePoll = (pollID: string): void => {
	pollsRef.doc(pollID).delete();
	return;
};
