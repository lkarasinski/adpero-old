import { Expense } from "utils/interfaces";
import { emptyDetail, emptyExpense } from "utils/constants";

type NewExpense = (values: Expense[]) => Expense[];
export const addNewExpense: NewExpense = (values) => [...values, emptyExpense];

type NewDetail = (values: Expense[], index: number) => Expense[];
export const addNewDetail: NewDetail = (values, index) => {
    const copy = [...values];
    copy[index].details.push(emptyDetail);
    return copy;
};
