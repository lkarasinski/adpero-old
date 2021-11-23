import firebase from "firebase/app";

const handleLoginLogout = (isLoggedIn: boolean): void => {
    if (isLoggedIn) {
        firebase.auth().signOut();
    } else {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase
            .auth()
            .signInWithPopup(provider)
            .catch((error) => {
                console.error(error.code);
                console.error(error.message);
            });
    }
};

export default handleLoginLogout;
