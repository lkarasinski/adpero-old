import { useRouter } from "next/router";
import firebase from "firebase/app";
import "firebase/firestore";

const collectionRef = firebase.firestore().collection("journeys");

type useDeleteJourney = (journeyID: string) => (() => Promise<void>)[];
const useDeleteJourney: useDeleteJourney = (journeyID) => {
    const router = useRouter();

    if (journeyID.startsWith("offline")) {
        const deleteOfflineJourney = async () => {
            const localStorageData = JSON.parse(
                localStorage.getItem("offlineJourneysData") ?? "{}"
            );
            const { [`journey-${journeyID}`]: _, ...newData } =
                localStorageData;
            localStorage.setItem(
                "offlineJourneysData",
                `${JSON.stringify(newData)}`
            );
            router.push("/");
        };

        return [deleteOfflineJourney];
    } else {
        const deleteOnlineJourney = async () => {
            await collectionRef.doc(journeyID).delete();
            router.push("/");
        };

        return [deleteOnlineJourney];
    }
};

export default useDeleteJourney;
