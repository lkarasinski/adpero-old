import "@testing-library/cypress/add-commands";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";

import { attachCustomCommands } from "cypress-firebase";

const LOCAL_STORAGE_MEMORY: { [key: string]: any } = {};

Cypress.Commands.add("saveLocalStorage", () => {
    Object.keys(localStorage).forEach((key) => {
        LOCAL_STORAGE_MEMORY[key] = localStorage[key];
    });
});

Cypress.Commands.add("restoreLocalStorage", () => {
    Object.keys(LOCAL_STORAGE_MEMORY).forEach((key) => {
        localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
    });
});

const fbConfig = {
    apiKey: "AIzaSyA3Jczs7ht_gFUrZIB0jbn74jQZPoybNWc",
    authDomain: "adpero-1a98f.firebaseapp.com",
    projectId: "adpero-1a98f",
    storageBucket: "adpero-1a98f.appspot.com",
    messagingSenderId: "86347270073",
    appId: "1:86347270073:web:23d5de879d2d0a5ec41868",
    measurementId: "G-1G58M2XVBV",
};

firebase.initializeApp(fbConfig);

attachCustomCommands({ Cypress, cy, firebase });
