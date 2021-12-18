import { useRouter } from "next/router";
import firebase from "firebase/app";
import "firebase/firestore";
import { Journey } from "utils/interfaces";

const useNewJourney = (): [(values: Journey) => Promise<void>] => {
    const journeysRef = firebase.firestore().collection("journeys");
    const router = useRouter();

    const createNewJourney = async (values: Journey) => {
        if (values.author) {
            const userEmail = values.author;
            if (userEmail) {
                const journeyData = await journeysRef.add(values);
                values.id = journeyData.id;
                await journeysRef.doc(journeyData.id).set(values);
                router.push(`/journeys/${journeyData.id}`);
            }
        } else {
            values.author = "local";
            values.users = ["local"];
            const randomID =
                Math.random().toString(36).substring(2, 15) +
                Math.random().toString(36).substring(2, 15);
            values.id = randomID;
            const offlineData = JSON.parse(
                localStorage.getItem("offlineJourneysData") ?? "{}"
            );
            offlineData[`journey-${randomID}`] = values;
            localStorage.setItem(
                "offlineJourneysData",
                JSON.stringify(offlineData)
            );
            router.push(`/journeys/${randomID}`);
        }
    };

    return [createNewJourney];
};

export default useNewJourney;
