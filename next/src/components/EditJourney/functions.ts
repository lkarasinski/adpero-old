import { Expense } from "utils/interfaces";
import { emptyDetail, emptyExpense } from "utils/constants";
import { setValues } from "utils/types";

type NewExpense = (values: Expense[], setValues: setValues) => void;
export const addNewExpense: NewExpense = (values, setValues) => {
    setValues([...values, emptyExpense]);
};

type NewDetail = (
    values: Expense[],
    expenseIndex: number,
    setValues: setValues
) => void;
export const addNewDetail: NewDetail = (values, expenseIndex, setValues) => {
    const copy = [...values];
    copy[expenseIndex].details.push(emptyDetail);
    setValues([...copy]);
};
