import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import initAuth from '../lib/initAuth';
import firebase from 'firebase/app';
import 'regenerator-runtime/runtime.js';
require('regenerator-runtime/runtime');

initAuth();

const firebaseConfig = {
    apiKey: 'AIzaSyA3Jczs7ht_gFUrZIB0jbn74jQZPoybNWc',
    authDomain: 'adpero-1a98f.firebaseapp.com',
    projectId: 'adpero-1a98f',
    storageBucket: 'adpero-1a98f.appspot.com',
    messagingSenderId: '86347270073',
    appId: '1:86347270073:web:23d5de879d2d0a5ec41868',
    measurementId: 'G-1G58M2XVBV',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
export default MyApp;
