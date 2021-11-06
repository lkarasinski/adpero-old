import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { Expense } from "utils/interfaces";
import firebase from "firebase/app";
import "firebase/firestore";
import { IJourneyCard } from "utils/types";

const journeysRef = firebase.firestore().collection("journeys");

type Email = string | null;
type UseJourneysReturn = [IJourneyCard[], boolean];

/**
 * Hook to get all journeys from firestore and set them to local storage
 * @param {string} userId
 * @return [IJournyCard[], boolean]
 */
const useJourneys = (email: Email): UseJourneysReturn => {
    const dataQuery = journeysRef.where("users", "array-contains", email);
    const [collectionData, loading] = useCollection(dataQuery);
    const [data, setData] = useState<IJourneyCard[]>([]);

    // Load data from local storage
    useEffect(() => {
        const localStorageDashboardData = localStorage.getItem("dashboardData");
        if (localStorageDashboardData) {
            const dashboardData = JSON.parse(localStorageDashboardData);
            if (dashboardData) {
                setData(dashboardData);
            }
        }
    }, []);

    // Load data from database, set local storage to that data
    useEffect(() => {
        if (!loading && collectionData && email) {
            const journeyData = collectionData.docs.map((data) => ({
                label: data.data().name,
                details: data
                    .data()
                    .expenses.map((expense: Expense) => expense.title),
                id: data.ref.id,
            }));
            setData(journeyData);
            localStorage.setItem("dashboardData", JSON.stringify(journeyData));

            const localStorageJourneysData = collectionData.docs.map(
                (data) => ({
                    ...data.data(),
                    id: data.ref.id,
                })
            );

            localStorage.setItem(
                "journeysData",
                JSON.stringify(localStorageJourneysData)
            );
        }
    }, [loading, collectionData]);

    return [data, loading];
};

export default useJourneys;
