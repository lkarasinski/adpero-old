export interface Details {
	label: string;
	type: string;
	value: string;
	currency?: string;
}
type DetailsArray = Details[];

export interface Expense {
	title: string;
	details: DetailsArray;
}

export type ExpenseFormValues = Expense[];
