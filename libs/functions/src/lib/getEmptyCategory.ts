import { Expense } from "@adpero/interfaces";
import { getEmptyDetail } from "./getEmptyDetail";
import { getRandomID } from "./getRandomID";

export const getEmptyCategory = (): Expense => {
    return {
        title: "",
        details: [getEmptyDetail()],
        id: getRandomID(),
    };
};
