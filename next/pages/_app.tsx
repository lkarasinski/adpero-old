import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import firebase from "firebase/app";
import initAuth from "../utils/initAuth";
import "regenerator-runtime/runtime.js";
import Layout from "components/Templates/Layout";
require("regenerator-runtime/runtime");

const firebaseConfig = {
    apiKey: "AIzaSyA3Jczs7ht_gFUrZIB0jbn74jQZPoybNWc",
    authDomain: "adpero-1a98f.firebaseapp.com",
    projectId: "adpero-1a98f",
    storageBucket: "adpero-1a98f.appspot.com",
    messagingSenderId: "86347270073",
    appId: "1:86347270073:web:23d5de879d2d0a5ec41868",
    measurementId: "G-1G58M2XVBV",
};

initAuth();

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />;
        </Layout>
    );
}
export default MyApp;
