import { Detail } from "@adpero/interfaces";
import { getRandomID } from "./getRandomID";

export const getEmptyDetail = (): Detail => {
    return {
        label: "",
        value: "",
        type: "",
        currency: "",
        id: getRandomID(),
    };
};
