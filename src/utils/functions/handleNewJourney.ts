import firebase from "firebase";

interface Props {
    name: string;
    historyPush: (x: string) => void;
    auth: firebase.User | null | undefined;
}

const journeysRef = firebase.firestore().collection("journeys");

export const handleNewJourney = async ({ name, historyPush, auth }: Props) => {
    if (auth) {
        const userEmail = auth.email;
        if (userEmail) {
            const journeyData = await journeysRef.add({
                name: name,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                users: [userEmail],
                author: userEmail,
                editors: [],
                expenses: [],
            });
            historyPush(`/journeys/${journeyData.id}`);
        }
    }
};
