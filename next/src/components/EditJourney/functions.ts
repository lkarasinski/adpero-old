import { Journey } from "utils/interfaces";
import { emptyDetail, emptyExpense } from "utils/constants";
import { setValues } from "utils/types";
import editLocalStorage from "functions/editLocalStorage";
import { Dispatch } from "react";

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

type saveJoruneyProps = {
    ID: string;
    email: string;
    updateDB: any;
    values: any;
    setIsEditModeEnabled: any;
    setJourneyData: Dispatch<any>;
};
type saveJourney = (props: saveJoruneyProps) => void;

export const saveJourney: saveJourney = ({
    ID,
    email,
    updateDB,
    values,
    setIsEditModeEnabled,
    setJourneyData,
}) => {
    if (ID.startsWith("offline")) {
        editLocalStorage(`journey-${ID}`, values, "offlineJourneysData");
        setJourneyData(values);
        setIsEditModeEnabled();
    }
    if (email) {
        updateDB({ ...values });
        setIsEditModeEnabled();
    }
};
