import React from 'react';
import { documentDataType } from '../../firebase';
import { Expense, Details } from '../../utilities/interfaces/ExpenseFormValues';

interface Props {
	journeyData: documentDataType;
}

export const ExpensesList: React.FC<Props> = ({ journeyData }) => {
	const expenses = journeyData.expenses;

	return (
		<div>
			<div style={{ display: 'flex', gap: '1em' }}>
				{expenses.map((expense: Expense, i: number) => {
					return (
						<div key={i}>
							<h3>{expense.title}</h3>
							{expense.details.map(
								(detail: Details, j: number) => (
									<div key={j}>
										{detail.label} - {detail.value}
									</div>
								)
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};
