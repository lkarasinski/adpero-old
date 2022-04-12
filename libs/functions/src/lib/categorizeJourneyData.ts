import { Journey } from "@adpero/interfaces";

export const getDayDiff = (startDate: Date, endDate: Date) => {
    return Math.floor(
        (new Date(startDate).getTime() - new Date(endDate).getTime()) /
            (24 * 3600 * 1000)
    );
};

export type CategorizeJourneyData = (journeys: Journey[]) => {
    currentJourneys: Journey[];
    upcomingJourneys: Journey[];
    pastJourneys: Journey[];
    futureJourneys: Journey[];
};

export const categorizeJourneyData: CategorizeJourneyData = (journeys) => {
    const currentJourneys = journeys.filter(
        ({ startDate, endDate }) =>
            new Date(startDate) <= new Date() && new Date(endDate) >= new Date()
    );

    const upcomingJourneys = journeys.filter(({ startDate }) => {
        const dayDiff = getDayDiff(new Date(startDate), new Date());
        return dayDiff >= 0 && dayDiff <= 30;
    });

    const pastJourneys = journeys.filter(
        ({ endDate }) => new Date(endDate) < new Date()
    );

    const futureJourneys = journeys.filter(({ startDate }) => {
        const dayDiff = getDayDiff(new Date(startDate), new Date());
        return dayDiff > 30;
    });

    return { currentJourneys, upcomingJourneys, pastJourneys, futureJourneys };
};

export default categorizeJourneyData;
