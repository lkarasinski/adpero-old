import React from 'react';

import { ExpensesList } from './Display/ExpensesList';
import { ExpenseForm } from './ExpenseForm';
import firebase from 'firebase';
import { LeaveJourneyButton } from 'components/Pages/JourneysList/Journey List/LeaveJourneyButton';

interface Props {
	id: string;
	editor: boolean;
}
/**
 * Renders a Expense panel and checks if the user has editor access.
 * User can go into editing mode that allows to change the values in the document of provided id
 * @param id
 * @param editor
 */
export const Expenses: React.FC<Props> = ({ id, editor }) => {
	const [isEditing, setIsEditing] = React.useState(false);
	const docRef = firebase.firestore().collection('journeys').doc(id);
	return (
		<>
			{editor ? (
				<button onClick={() => setIsEditing(!isEditing)}>
					{isEditing ? 'Stop editing' : 'Edit'}
				</button>
			) : null}
			{!isEditing ? <ExpensesList docRef={docRef} /> : null}
			{editor && isEditing ? (
				<ExpenseForm id={id} setIsEditing={setIsEditing} />
			) : null}
			<LeaveJourneyButton />
		</>
	);
};
