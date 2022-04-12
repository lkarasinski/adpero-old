import { CreateJourney } from "../types";

export const createLocalJourney: CreateJourney = async ({
    data,
    setLocalJourneys,
}) => {
    const randomID = Math.random().toString(36).substring(2, 15);
    data.id = randomID;
    const journey = {
        id: randomID,
        ref: null,
        data: {
            ...data,
            createdAt: new Date(data.createdAt),
            startDate: new Date(data.startDate),
            endDate: new Date(data.endDate),
        },
    };
    setLocalJourneys?.((journeys) => [...journeys, journey]);
    return randomID;
};

export default createLocalJourney;
