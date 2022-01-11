import { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { IJourneyCard } from "utils/types";
import { Expense } from "utils/interfaces";

const journeysRef = firebase.firestore().collection("journeys");

type UseDashboardData = (email: string | null) => [IJourneyCard[]];

const useDashboardData: UseDashboardData = (email) => {
    const dataQuery = journeysRef.where("users", "array-contains", email);
    const [collectionData, loading] = useCollection(dataQuery);
    const [data, setData] = useState<IJourneyCard[]>([]);

    const offlineJourneys = JSON.parse(
        localStorage.getItem("offlineJourneysData") ?? "[]"
    );

    useEffect(() => {
        const onlineJourneys = JSON.parse(
            localStorage.getItem("journeysData") ?? "[]"
        );

        const onlineDashboardData = [];
        for (const journey in onlineJourneys) {
            onlineDashboardData.push({
                label: onlineJourneys[journey].name,
                details: onlineJourneys[journey].expenses.map(
                    (expense: Expense) => expense.title
                ),
                id: onlineJourneys[journey]?.id,
            });
        }

        const offlineDashboardData = [];
        for (const journey in offlineJourneys) {
            offlineDashboardData.push({
                label: offlineJourneys[journey].name,
                details: offlineJourneys[journey].expenses.map(
                    (expense: Expense) => expense.title
                ),
                id: offlineJourneys[journey]?.id,
            });
        }

        setData([...onlineDashboardData, ...offlineDashboardData]);
    }, []);

    useEffect(() => {
        if (email) {
            if (collectionData) {
                const onlineDashboardData = collectionData.docs.map((data) => ({
                    label: data.data().name,
                    details: data
                        .data()
                        .expenses.map((expense: Expense) => expense.title),
                    id: data.ref.id,
                }));
                const offlineDashboardData = [];
                for (const journey in offlineJourneys) {
                    offlineDashboardData.push({
                        label: offlineJourneys[journey].name,
                        details: offlineJourneys[journey].expenses.map(
                            (expense: Expense) => expense.title
                        ),
                        id: offlineJourneys[journey]?.id,
                    });
                }
                setData([...onlineDashboardData, ...offlineDashboardData]);
            }
        }
    }, [loading]);

    return [data];
};

export default useDashboardData;
