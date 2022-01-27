import getRandomID from "functions/getRandomID";
import { Detail, Expense, Poll } from "./interfaces";

export const getEmptyDetail = (): Detail => {
    return {
        label: "New detail label",
        value: "New detail value",
        type: "Text",
        currency: "",
        id: getRandomID(),
    };
};

export const getEmptyCategory = (): Expense => {
    return {
        title: "New Category",
        details: [getEmptyDetail()],
        id: getRandomID(),
    };
};

export const getEmptyPoll = (): Poll => {
    return {
        title: "New Poll",
        content: [],
        votes: [],
        id: getRandomID(),
    };
};
