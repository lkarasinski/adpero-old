import firebase, { authType } from '@firebase';

export const handleLoginLogout = (auth: authType): void => {
	if (auth) {
		firebase.auth().signOut();
	} else {
		const provider = new firebase.auth.GoogleAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.catch((err) => {
				const errorCode = err.code;
				const errorMessage = err.message;
				console.error(errorCode);
				console.error(errorMessage);
			});
	}
	return;
};
