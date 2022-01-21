import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { emptyPoll } from "utils/constants";

const journeysRef = firebase.firestore().collection("journeys");

type UseCreatePoll = (
    journeyID: string,
    pollTitle: string
) => [(() => Promise<void>) | null];

const useCreatePoll: UseCreatePoll = (journeyID, pollTitle) => {
    const [createPollFunction, setCreatePollFunction] = useState<any>(null);

    useEffect(() => {
        (async () => {
            const journeyDoc = journeysRef.doc(journeyID);
            const journeyData = await journeyDoc.get();
            const docData = journeyData.data();
            if (journeyData && docData) {
                const createPoll = async () => {
                    const newPoll = emptyPoll;
                    newPoll.title = pollTitle;
                    await journeyDoc.update({
                        polls: [...docData.polls, newPoll],
                    });
                };
                setCreatePollFunction(() => createPoll);
            }
        })();
    }, []);

    return [createPollFunction];
};

export default useCreatePoll;
