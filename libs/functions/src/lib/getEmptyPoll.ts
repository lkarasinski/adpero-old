import { Poll } from "@adpero/interfaces";
import { getRandomID } from "./getRandomID";

export const getEmptyPoll = (): Poll => {
    return {
        title: "New Poll",
        content: [],
        votes: [],
        id: getRandomID(),
    };
};
