import { initializeApp, getApp, getApps, FirebaseApp } from "firebase/app";
import { firebaseConfig } from "./config";

export const firebaseApp: FirebaseApp = getApps().length
    ? getApp()
    : initializeApp(firebaseConfig);

export default firebaseApp;
