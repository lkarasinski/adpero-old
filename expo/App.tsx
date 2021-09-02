// @refresh reset

import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useDocument } from "react-firebase-hooks/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Dashboard from "@components/views/Dashboard";
import Journeys from "@components/views/Journeys";
import Polls from "@components/views/Polls";
import firebase from "firebase/app";
import "firebase/firestore";
import _ from "lodash";

const Tab = createBottomTabNavigator();

const firebaseConfig = {
    apiKey: "AIzaSyA3Jczs7ht_gFUrZIB0jbn74jQZPoybNWc",
    authDomain: "adpero-1a98f.firebaseapp.com",
    projectId: "adpero-1a98f",
    storageBucket: "adpero-1a98f.appspot.com",
    messagingSenderId: "86347270073",
    appId: "1:86347270073:web:23d5de879d2d0a5ec41868",
    measurementId: "G-1G58M2XVBV",
};

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const journeysRef = firebase.firestore().collection("journeys");
interface A {
    [x: string]: any;
}

const App: React.FC = () => {
    const [journeysState, setJourneysState] = useState<A>({
        users: ["a", "b"],
    });

    const doc = journeysRef.doc("1eUQARA4DAYE4Lg4BPYo");
    const [docData, loading] = useDocument(doc);
    useEffect(() => {
        const getDataFromLocalStorage = async () => {
            const journeys = await AsyncStorage.getItem("journeys");
            if (journeys) {
                setJourneysState(JSON.parse(journeys));
            }
        };

        getDataFromLocalStorage();
        // 1. Check for data in the local storage.
        // 2. Set the state to that data and.
        // 3. Get data from firebase and add it to the local storage.
        // 4. If there is data in the local storage that is not present in firebase, upload it.
    }, [loading]);

    useEffect(() => {
        const getDataFromFirebase = async () => {
            if (docData) {
                const journeysData = docData.data();
                console.log(journeysData);
                console.log(journeysState);
                console.log(_.differenceBy([journeysData], [journeysState]));
                if (_.isEqual(journeysData, journeysState)) {
                    console.log("state and firebase equal");
                } else {
                    console.log("state and firebase not equal");
                    const x = { ...journeysData };
                    await AsyncStorage.setItem("journeys", JSON.stringify(x));
                    setJourneysState(x);
                }
            }
        };

        getDataFromFirebase();
    }, [loading]);

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Dashboard" component={Dashboard} />
                <Tab.Screen name="Journeys" component={Journeys} />
                <Tab.Screen name="Polls" component={Polls} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
