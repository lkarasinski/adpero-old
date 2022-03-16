import { Journey } from "@adpero/interfaces";
import { getRandomID } from "./getRandomID";

export const getEmptyJourney = (author: string) => {
    const emptyJourney: Journey = {
        author: author,
        createdAt: new Date(),
        editors: [],
        expenses: [],
        name: "",
        polls: [],
        users: [author],
        startDate: new Date(),
        endDate: new Date(),
        id: getRandomID(),
        cost: { value: 0, currency: "EUR" },
    };

    return emptyJourney;
};
