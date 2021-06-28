import firebase from 'firebase';

interface Props {
	name: string;
	historyPush: (x: string) => void;
	auth: firebase.User | null | undefined;
}

const journeysRef = firebase.firestore().collection('journeys');

export const handleNewJourney = ({ name, historyPush, auth }: Props): void => {
	if (auth) {
		const userEmail = auth.email;
		if (userEmail) {
			journeysRef
				.add({
					name: name,
					createdAt: firebase.firestore.FieldValue.serverTimestamp(),
					users: [userEmail],
					author: userEmail,
					editors: [],
					expenses: [],
				})
				.then((docRef) => {
					historyPush(docRef.id);
				});
		}
	}
};
