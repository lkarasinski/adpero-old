import { Detail, Expense } from "./interfaces";

export const emptyDetail: Detail = {
    label: "",
    value: "",
    type: "",
    currency: "",
};

export const emptyExpense: Expense = {
    title: "",
    details: [emptyDetail],
};
