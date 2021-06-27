import firebase from '../../firebase';

type documentType = firebase.firestore.DocumentData;
type dataType = firebase.firestore.QuerySnapshot<documentType>;

const compareDate = (a: documentType, b: documentType) => {
	const aSeconds = a.data().createdAt.seconds;
	const bSeconds = b.data().createdAt.seconds;
	return aSeconds > bSeconds ? -1 : aSeconds < bSeconds ? 1 : 0;
};

export const sortResultsByCreationDate = (data: dataType): documentType => {
	console.log(data);
	if (!data.empty && data.docs.length !== 0) {
		const one = data;
		one.docs.sort(compareDate);
		const two = data;
		console.log(one == two);
	}
	return data;
};
