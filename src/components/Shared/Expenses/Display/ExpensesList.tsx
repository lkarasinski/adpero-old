import React from 'react';
import { Expense } from '../../../../interfaces/Expenses';
import { Spendings } from '../Spendings';
import { getAllSpendings } from '../../../../functions/getAllSpendings';
import { useDocument } from 'react-firebase-hooks/firestore';
import firebase from 'firebase';
import { ExpensePanel } from './ExpensePanel';
import { ExpenseContainer } from '../_shared/styledComponents';

interface Props {
	docRef: firebase.firestore.DocumentReference<
		firebase.firestore.DocumentData
	>;
}
/**
 * Renders a list of all expenses and counts all the spendings of the journey referenced.
 * @param docRef reference to the journey document
 */
export const ExpensesList: React.FC<Props> = ({ docRef }) => {
	const [firestoreData, loading] = useDocument(docRef);
	if (loading || !firestoreData) {
		return null;
		// SKELETON
	}
	const expenses = firestoreData.data()?.expenses;

	return (
		<>
			<Spendings spendings={getAllSpendings(expenses)} />
			<ExpenseContainer>
				{expenses.map((expense: Expense, i: number) => (
					<ExpensePanel key={i} expense={expense} />
				))}
			</ExpenseContainer>
		</>
	);
};
