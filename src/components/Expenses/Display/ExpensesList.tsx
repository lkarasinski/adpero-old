import React from 'react';
import { documentDataType } from '../../../firebase';
import { Expense, Details } from '../../../utilities/interfaces/Expenses';
import {
	DetailText,
	DetailTextContainer,
	ExpenseTitle,
} from '../shared/styledComponents';
import { Spendings } from './../Spendings';
import { getAllSpendings } from '../../../utilities/functions/getAllSpendings';

interface Props {
	journeyData: documentDataType;
}

export const ExpensesList: React.FC<Props> = ({ journeyData }) => {
	const expenses = journeyData.expenses;

	return (
		<div>
			<Spendings spendings={getAllSpendings(journeyData.expenses)} />
			<div
				style={{ display: 'flex', gap: '1em', flexDirection: 'column' }}
			>
				{expenses.map((expense: Expense, i: number) => {
					return (
						<div key={i}>
							<ExpenseTitle>{expense.title}</ExpenseTitle>
							{expense.details.map(
								(detail: Details, j: number) => (
									<DetailTextContainer key={j}>
										<DetailText>{detail.label}</DetailText>
										<DetailText>{detail.value}</DetailText>
										{detail.currency !== '' ? (
											<DetailText>
												{detail.currency}
											</DetailText>
										) : null}
									</DetailTextContainer>
								)
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};
