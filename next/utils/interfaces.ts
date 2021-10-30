export interface Detail {
    label: string;
    type: "Price" | "Text" | "Date" | "Address" | "";
    value: string;
    currency?: string;
}
export interface Expense {
    details: Detail[];
    title: string;
}

export interface Cost {
    value: number;
    currency: string;
}

export interface JourneyData {
    journeyName: string;
    totalCost: Cost;
    startDate: string;
    endDate: string;
    users: string[];
    expenses: Expense[];
    polls: PollDetails[];
}

export interface PollDetails {
    label: string;
    notification: boolean;
}

export interface Vote {
    id: number;
    value: number;
}

export interface Poll {
    title: string;
    id: string;
    votes: Vote[];
    details: Detail[];
}
