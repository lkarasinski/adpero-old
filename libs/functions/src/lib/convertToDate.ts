import { Timestamp } from "@adpero/interfaces";

type Input = string | Timestamp | Date | undefined | null;

export const convertToDate = (input: Input): Date => {
    input = JSON.parse(JSON.stringify(input));

    if (input === undefined || input === null) {
        return new Date();
    }
    if (typeof input === "string") {
        if (new Date(input).toString() === "Invalid Date") {
            return new Date();
        } else {
            return new Date(input);
        }
    }

    return (input as Timestamp).seconds !== undefined
        ? new Date((input as Timestamp).seconds * 1000)
        : (input as Date);
};

export default convertToDate;
