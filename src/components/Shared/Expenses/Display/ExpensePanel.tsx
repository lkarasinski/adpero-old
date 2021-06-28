import * as React from 'react';
import { Details, Expense } from 'interfaces/Expenses';
import {
	DetailText,
	DetailTextContainer,
	ExpenseTitle,
} from '../_shared/styledComponents';

interface Props {
	expense: Expense;
}
/**
 * Expense Panel displaying all it's details
 * @param expense - Expense data
 * @returns
 */
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
