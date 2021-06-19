import firebase from './../firebase';

export const sortResultsByCreationDate = (
	array: firebase.firestore.DocumentData[]
) => {
	const compareDate = (a: any, b: any) => {
		return a.createdAt.seconds > b.createdAt.seconds
			? -1
			: a.createdAt.seconds < b.createdAt.seconds
			? 1
			: 0;
	};
	array.sort(compareDate);
};
