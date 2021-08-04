import { JourneyData } from "utils/interfaces";

const mockData = {
    journeyName: "",
    totalCost: { value: 0, currency: "" },
    startDate: "",
    endDate: "",
    users: [""],
    expenses: [
        {
            title: "",
            details: [
                {
                    label: "",
                    value: "",
                    type: "",
                    currency: "",
                },
            ],
        },
    ],
    polls: [],
};

export default function getJourneyData(): JourneyData {
    return mockData;
}
