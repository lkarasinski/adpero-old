import React from "react";
import type { AppProps } from "next/app";
import firebase from "firebase/app";
import initAuth from "../services/auth/initAuth";
import "regenerator-runtime/runtime.js";
import Layout from "components/Templates/Layout";
import { createGlobalStyle } from "styled-components";
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

const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700;800;900&display=swap");

    html,
    body {
        padding: 0;
        margin: 0;
        font-family: Nunito, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <GlobalStyle />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
};
export default App;
