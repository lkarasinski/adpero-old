import { Expense, Journey } from "./interfaces";

export type IJourneyCard = {
    label: string;
    details: string[];
    id?: string;
};

export type setValues = (
    values: React.SetStateAction<Journey>,
    shouldValidate?: boolean | undefined
) => void;
