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
        }
    };

    return [createNewJourney];
};

export default useNewJourney;
