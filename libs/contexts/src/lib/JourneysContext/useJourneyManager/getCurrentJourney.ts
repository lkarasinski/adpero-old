import { GetCurrentJourney } from "../types";

export const getCurrentJourney: GetCurrentJourney = ({ journeys, query }) => {
    return journeys.find((journey) => journey.id === query);
};

export default getCurrentJourney;
