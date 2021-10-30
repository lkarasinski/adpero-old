import { emptyExpense } from "utils/constants";
import { JourneyData } from "utils/interfaces";

const mockData = {
    journeyName: "",
    totalCost: { value: 0, currency: "" },
    startDate: "",
    endDate: "",
    users: [""],
    expenses: [emptyExpense],
    polls: [],
};

export default function getJourneyData(): JourneyData {
    return mockData;
}
