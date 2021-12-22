import { Journey } from "utils/interfaces";
import { emptyDetail, emptyExpense } from "utils/constants";
import { setValues } from "utils/types";
import editLocalStorage from "functions/editLocalStorage";

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
};
type saveJourney = (props: saveJoruneyProps) => void;

export const saveJourney: saveJourney = ({
    ID,
    email,
    updateDB,
    values,
    setIsEditModeEnabled,
}) => {
    if (ID.startsWith("offline")) {
        console.log("offline journey");
        editLocalStorage(`journey-${ID}`, values, "offlineJourneysData");
        // const journeysStorage = JSON.parse(
        //     localStorage.getItem("offlineJourneysData") ?? "{}"
        // );
        // journeysStorage[`journey-${ID}`] = { ...values };
        // localStorage.setItem(
        //     "offlineJourneysData",
        //     `${JSON.stringify(journeysStorage)}`
        // );
        setIsEditModeEnabled();
    }
    if (email) {
        console.log({ ...values });
        updateDB({ ...values });
        setIsEditModeEnabled();
    }
};
