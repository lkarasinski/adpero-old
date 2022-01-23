import { Expense, Journey } from './interfaces';

export type IJourneyCard = {
    label: string;
    expenses: string[];
    id?: string;
};

export type setValues = (
    values: React.SetStateAction<Journey>,
    shouldValidate?: boolean | undefined
) => void;
