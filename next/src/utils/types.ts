import { Expense } from "./interfaces";

export type IJourneyCard = {
    label: string;
    details: string[];
    id?: string;
};

export type setValues = (
    values: React.SetStateAction<Expense[]>,
    shouldValidate?: boolean | undefined
) => void;
