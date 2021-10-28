import { Expense } from "utils/interfaces";
import { emptyDetail, emptyExpense } from "./constants";

export const addNewExpense = (values: Expense[]): Expense[] => {
    const copy = [...values];
    copy.push(emptyExpense);
    return copy;
};

export const addNewDetail = (values: Expense[], index: number): Expense[] => {
    const copy = [...values];
    copy[index].details.push(emptyDetail);
    return copy;
};
