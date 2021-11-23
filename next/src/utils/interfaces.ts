import firebase from "firebase";

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
    // Upcoming properties
    lastEdited?: Date;
}

export interface Poll {
    title: string;
    id: string;
    votes: Vote[];
    details: Detail[];
}
export interface Expense {
    details: Detail[];
    title: string;
}
export interface Detail {
    label: string;
    type: "Price" | "Text" | "Date" | "Address" | "";
    value: string;
    currency?: string;
}

export interface Cost {
    value: number;
    currency: string;
}

export type Timestamp = firebase.firestore.Timestamp;

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
    id: number;
    value: number;
}
