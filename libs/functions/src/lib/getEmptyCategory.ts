import { Category } from "@adpero/interfaces";
import { getEmptyDetail } from "./getEmptyDetail";
import { getRandomID } from "./getRandomID";

export const getEmptyCategory = (): Category => {
    return {
        title: "",
        details: [getEmptyDetail()],
        id: getRandomID(),
    };
};
