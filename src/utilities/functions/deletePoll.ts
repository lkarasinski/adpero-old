import firebase from 'firebase';

const pollsRef = firebase.firestore().collection('polls');

export const deletePoll = (pollID: string): void => {
	pollsRef.doc(pollID).delete();
	return;
};
