import React from "react";
import type { AppProps } from "next/app";
import firebase from "services/firebase";
import initAuth from "services/auth/initAuth";
import "regenerator-runtime/runtime.js";
import Layout from "components/Layout";
import { createGlobalStyle } from "styled-components";
import {
    withAuthUserTokenSSR,
    withAuthUser,
    useAuthUser,
} from "next-firebase-auth";
import { AnimatePresence } from "framer-motion";
import { firebaseConfig } from "utils/config";
import { JourneysProvider } from "context/JourneysContext";
require("regenerator-runtime/runtime");

initAuth();

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    firebase;
    const auth = useAuthUser();
    return (
        <>
            <GlobalStyle />
            <AnimatePresence
                exitBeforeEnter
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
            >
                <JourneysProvider>
                    <Layout auth={auth}>
                        <Component {...pageProps} />
                    </Layout>
                </JourneysProvider>
            </AnimatePresence>
        </>
    );
};

const GlobalStyle = createGlobalStyle`

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

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser<AppProps>()(App);
