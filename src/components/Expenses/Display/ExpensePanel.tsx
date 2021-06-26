import * as React from 'react';
import { Details, Expense } from 'utilities/interfaces/Expenses';
import {
	DetailText,
	DetailTextContainer,
	ExpenseTitle,
} from '../shared/styledComponents';

interface Props {
	expense: Expense;
}

export const ExpensePanel: React.FC<Props> = ({ expense }) => {
	return (
		<div>
			<ExpenseTitle>{expense.title}</ExpenseTitle>
			{expense.details.map((detail: Details, j: number) => (
				<DetailTextContainer key={j}>
					<DetailText>{detail.label}</DetailText>
					<DetailText>{detail.value}</DetailText>
					{detail.currency !== '' ? (
						<DetailText>{detail.currency}</DetailText>
					) : null}
				</DetailTextContainer>
			))}
		</div>
	);
};
