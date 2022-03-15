import { UpdateJourney } from "../types";

export const updateLocalJourney: UpdateJourney = async ({
    id,
    data,
    setLocalJourneys,
}) => {
    if (setLocalJourneys === undefined) {
        throw new Error(
            "setLocalJourneys is required when updating a local journey"
        );
    }

    setLocalJourneys((journeys) => {
        const newJourneys = journeys.map((journey) => {
            if (journey.id === id) {
                return {
                    id: id,
                    ref: null,
                    data: {
                        ...journey.data,
                        ...data,
                        createdAt: new Date(data.createdAt),
                        startDate: new Date(data.startDate),
                        endDate: new Date(data.endDate),
                    },
                };
            }
            return journey;
        });
        return newJourneys;
    });
};

export default updateLocalJourney;
