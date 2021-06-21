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
				{expenses.map((expense: any, i: number) => (
					<div key={i}>
						<h4>{expense.label}</h4>
						<h5>{expense.value}</h5>
						<p>{expense.type}</p>
					</div>
				))}
			</div>
		</div>
	);
};
