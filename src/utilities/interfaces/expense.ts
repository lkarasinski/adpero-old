export default interface Expense<T> {
	title: string;
	details: [
		{
			label: string;
			value: T;
			type: string;
		}
	];
	pollId?: number;
}
