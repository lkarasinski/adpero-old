import firebase from '../../firebase';

export const sortResultsByCreationDate = (
	array: firebase.firestore.DocumentData[]
): void => {
	const compareDate = (
		a: firebase.firestore.DocumentData,
		b: firebase.firestore.DocumentData
	) => {
		return a.createdAt.seconds > b.createdAt.seconds
			? -1
			: a.createdAt.seconds < b.createdAt.seconds
			? 1
			: 0;
	};
	array.sort(compareDate);
	return;
};
