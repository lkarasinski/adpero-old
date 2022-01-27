export interface Journey {
    author: string;
    createdAt: Date;
    editors: string[];
    expenses: Expense[];
    name: string;
    polls: Poll[];
    users: string[];
    startDate: Date;
    endDate: Date;
    id: string;
    cost: Cost;
    // Upcoming properties
    lastEdited?: Date;
}

export interface Poll {
    title: string;
    id: string;
    votes: Vote[];
    content: Expense[];
}
export interface Expense {
    details: Detail[];
    title: string;
    id: string;
}
export interface Detail {
    label: string;
    type: "Price" | "Text" | "Date" | "Address" | "";
    value: string | Date;
    currency: string;
    id: string;
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
    polls: Poll[];
}

export interface Vote {
    user: string;
    id: string; // Refers to the expense id
}
