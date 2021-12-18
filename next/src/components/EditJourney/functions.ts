import { Journey } from "utils/interfaces";
import { emptyDetail, emptyExpense } from "utils/constants";
import { setValues } from "utils/types";

type NewExpense = (values: Journey, setValues: setValues) => void;
export const addNewExpense: NewExpense = (values, setValues) => {
    const valuesCopy = { ...values };
    valuesCopy.expenses.push(emptyExpense);
    setValues({ ...valuesCopy });
};

type NewDetail = (
    values: Journey,
    expenseIndex: number,
    setValues: setValues
) => void;
export const addNewDetail: NewDetail = (values, expenseIndex, setValues) => {
    const valuesCopy = { ...values };
    valuesCopy.expenses[expenseIndex].details.push(emptyDetail);
    setValues({ ...valuesCopy });
};

type RemoveDetail = (
    values: Journey,
    expenseID: number,
    detailID: number,
    setValues: setValues
) => void;
export const removeDetail: RemoveDetail = (
    values,
    expenseID,
    detailID,
    setValues
) => {
    const valuesCopy = { ...values };
    const newDetails = valuesCopy.expenses[expenseID].details.filter(
        (detail) => {
            return detail !== valuesCopy.expenses[expenseID].details[detailID];
        }
    );
    valuesCopy.expenses[expenseID].details = newDetails;
    setValues({ ...valuesCopy });
};
