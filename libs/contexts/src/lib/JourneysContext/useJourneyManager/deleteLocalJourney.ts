import { DeleteJourney } from "../types";

export const deleteLocalJourney: DeleteJourney = async ({
    id,
    setLocalJourneys,
}) => {
    if (setLocalJourneys === undefined) {
        throw new Error(
            "setLocalJourneys is required when deleting a local journey"
        );
    }

    setLocalJourneys((journeys) =>
        journeys.filter((journey) => journey.id !== id)
    );
};

export default deleteLocalJourney;
