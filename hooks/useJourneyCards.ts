import useJourneys from "context/JourneysContext";

export const getDayDiff = (startDate: Date, endDate: Date) => {
    return Math.floor(
        (startDate.getTime() - endDate.getTime()) / (24 * 3600 * 1000)
    );
};

const useJourneyCards = () => {
    const journeysContext = useJourneys();
    if (journeysContext == undefined) {
        throw new Error(
            "useJourneyCards must be used within a JourneysContext"
        );
    }
    const { journeys } = journeysContext;

    const allJourneys = journeys.map(({ data }) => {
        return data;
    });

    const currentJourneys = allJourneys.filter(({ startDate, endDate }) => {
        return startDate <= new Date() && endDate >= new Date();
    });

    const upcomingJourneys = allJourneys.filter(({ startDate }) => {
        const dayDiff = getDayDiff(startDate, new Date());
        if (dayDiff >= 0 && dayDiff <= 30) {
            return true;
        }
    });

    const pastJourneys = allJourneys.filter(({ endDate }) => {
        if (endDate < new Date()) {
            return true;
        }
    });

    const futureJourneys = allJourneys.filter(({ startDate }) => {
        const dayDiff = getDayDiff(startDate, new Date());
        if (dayDiff > 30) {
            return true;
        }
    });

    return [currentJourneys, upcomingJourneys, pastJourneys, futureJourneys];
};

export default useJourneyCards;
