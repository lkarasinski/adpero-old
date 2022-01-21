import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import { Poll } from "utils/interfaces";

const journeysRef = firebase.firestore().collection("journeys");

type UsePollPage = (journeyID: string, pollID: string) => [Poll | null];

const usePollPage: UsePollPage = (journeyID, pollID) => {
    const journeyRef = journeysRef.doc(journeyID);
    const [journeyDocumentData, journeyLoading] = useDocument(journeyRef);
    const [data, setData] = useState<Poll | null>(null);

    useEffect(() => {
        if (journeyDocumentData) {
            const journeyData = journeyDocumentData.data();
            if (journeyData) {
                const polls = journeyData.polls;
                const pollData = polls.find((poll: Poll) => poll.id === pollID);
                setData(pollData);
            }
        }
    }, [journeyLoading]);

    return [data];
};

export default usePollPage;
