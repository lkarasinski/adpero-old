import { useRouter } from "next/router";
import firebase from "firebase/app";
import "firebase/firestore";

const collectionRef = firebase.firestore().collection("journeys");

type useDeleteJourney = (journeyID: string) => (() => Promise<void>)[];
const useDeleteJourney: useDeleteJourney = (journeyID) => {
    const router = useRouter();

    const deleteJourney = async () => {
        await collectionRef.doc(journeyID).delete();
        router.push("/");
    };

    return [deleteJourney];
};

export default useDeleteJourney;
