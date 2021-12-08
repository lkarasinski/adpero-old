import { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { IJourneyCard } from "utils/types";
import { Expense } from "utils/interfaces";

const journeysRef = firebase.firestore().collection("journeys");

const useDashboardData = (email: string | null) => {
    const dataQuery = journeysRef.where("users", "array-contains", email);
    const [collectionData, loading] = useCollection(dataQuery);
    const [data, setData] = useState<IJourneyCard[]>();

    useEffect(() => {
        const localStorageDashboardData = localStorage.getItem("dashboardData");
        if (localStorageDashboardData) {
            const data = JSON.parse(localStorageDashboardData);
            console.log(data);
            if (data) {
                setData(data);
            }
        }
    }, []);

    useEffect(() => {
        if (email) {
            if (collectionData) {
                const journeyData = collectionData.docs.map((data) => ({
                    label: data.data().name,
                    details: data
                        .data()
                        .expenses.map((expense: Expense) => expense.title),
                    id: data.ref.id,
                }));
                setData(journeyData);
                localStorage.setItem(
                    "dashboardData",
                    JSON.stringify(journeyData)
                );
            }
        }
    }, [loading]);

    return [data];
};

export default useDashboardData;
