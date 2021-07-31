import data from "../data";
export function getAllJourneyIds() {
    const journeys = data;

    return journeys.map((journey) => ({
        params: {
            id: journey,
        },
    }));
}

export function getAllPollIds() {
    const data = ["test", "testdwa"];

    return data.map((data) => ({
        params: {
            pollId: data,
        },
    }));
}

export function getJourneyData(id: any) {
    const data = id * 4;

    return {
        id,
        data,
    };
}
