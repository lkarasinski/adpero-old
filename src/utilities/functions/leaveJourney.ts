import firebase from 'firebase';
import { useDocument } from 'react-firebase-hooks/firestore';

const journeysRef = firebase.firestore().collection('journeys');

export const leaveJourney = (
	id: string,
	auth: firebase.User | null | undefined
): void => {
	const docRef = journeysRef.doc(id);
	const [data] = useDocument(docRef);
	const copy = data?.data();
	if (copy?.users.includes(auth?.email)) {
		const newUsers = copy?.users.filter(
			(user: string) => user !== auth?.email
		);
		copy.users = newUsers;
		docRef.update(copy);
	}
	return;
};
