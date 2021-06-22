import React from 'react';
import firebase from '../../firebase';

interface Props {
	journeyData: firebase.firestore.DocumentData;
}

export const ExpensesList: React.FC<Props> = ({ journeyData }) => {
	const expenses = journeyData.expenses;

	return (
		<div>
			<div style={{ display: 'flex', gap: '1em' }}>
				{expenses.map((expense: any, i: number) => {
					return (
						<div key={i}>
							<h3>{expense.title}</h3>
							{expense.details.map((detail: any, j: number) => (
								<div key={j}>
									{detail.label} - {detail.value}
								</div>
							))}
						</div>
					);
				})}
			</div>
		</div>
	);
};
