import firebase from 'firebase';

const journeysRef = firebase.firestore().collection('journeys');

/**
 * Removes user with email of auth.email from journey of ID
 * @param id - ID of the journey
 * @param auth - Firebase auth object
 * @returns
 */
export const leaveJourney = (
	id: string,
	auth: firebase.User | null | undefined
): void => {
	const docRef = journeysRef.doc(id);
	docRef.get().then((doc) => {
		const copy = doc?.data();
		if (copy?.users.includes(auth?.email)) {
			const newUsers = copy?.users.filter(
				(user: string) => user !== auth?.email
			);
			copy.users = newUsers;
			docRef.update(copy);
		}
	});
	return;
};
