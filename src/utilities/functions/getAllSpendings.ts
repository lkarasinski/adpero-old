import _ from 'lodash';
import { Expense } from '../interfaces/Expenses';
import { Details } from '../interfaces/Expenses';
import { spending } from '../interfaces/spending';

type Props = Expense[];

export const getAllSpendings = (expenses: Props): spending[] => {
	const array = expenses.map((expense: Expense) => {
		const typePrice = expense.details.filter(
			(details: Details) => details.type === 'Price'
		);
		return [
			...typePrice.map((x) => {
				const result = { value: x.value, currency: x.currency };
				return result;
			}),
		];
	});

	const allSpendings: spending[] = _.flatten(array);

	const allCurrenciesArray = allSpendings.map(
		(spending: spending) => spending.currency
	);
	const currencyArray: string[] = [];
	for (const currency of allCurrenciesArray) {
		if (currency) {
			if (!currencyArray.includes(currency)) {
				currencyArray.push(currency);
			}
		}
	}

	const result: spending[] = [];
	for (const currency of currencyArray) {
		let amount = 0;
		const matchingSpending = allSpendings.filter(
			(spending) => spending.currency === currency
		);
		for (const spending of matchingSpending) {
			amount += Number(spending.value);
		}
		result.push({ currency: currency, value: String(amount) });
	}
	return result;
};
