import { Detail, Expense, Poll } from "./interfaces";

export const emptyDetail: Detail = {
    label: "",
    value: "",
    type: "",
    currency: "",
    id:
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15),
};

export const emptyExpense: Expense = {
    title: "",
    details: [emptyDetail],
    id:
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15),
};

export const emptyPoll: Poll = {
    title: "",
    content: [],
    votes: [],
    id:
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15),
};
