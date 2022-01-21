import fb from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "utils/config";

const firebase = !fb.apps.length ? fb.initializeApp(firebaseConfig) : fb.app();

export default firebase;
