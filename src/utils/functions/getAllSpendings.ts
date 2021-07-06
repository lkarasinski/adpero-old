import _ from 'lodash';

import { Details, Expense } from '@utils/interfaces/Expenses';
import { spending } from '@utils/interfaces/spending';

type Props = Expense[];

/**
 * Takes a list of expenses and returns an array of all spendings separated by currency
 * @param expenses Array of expenses
 * @returns Array of spendings
 */

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
