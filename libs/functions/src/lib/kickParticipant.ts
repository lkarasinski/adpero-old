import { JourneyDataType, Journey } from "@adpero/interfaces";

export const kickParticipant = async ({
    participant,
    journey,
    updateJourney,
    isUserTheAuthor,
}: {
    participant: string;
    journey: JourneyDataType;
    updateJourney: (data: Journey, id: string) => Promise<void>;
    isUserTheAuthor: boolean;
}) => {
    if (journey && isUserTheAuthor) {
        await updateJourney(
            {
                ...journey.data,
                users: journey.data.users.filter((user) => {
                    if (user === journey.data.author) {
                        return true;
                    }
                    return user !== participant;
                }),
            },
            journey.id
        );
    }
};
