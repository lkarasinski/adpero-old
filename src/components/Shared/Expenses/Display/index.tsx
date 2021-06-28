import React from 'react';

import { ExpensesList } from './ExpensesList';
import { Edit } from '../Edit';
import firebase from 'firebase';
import { LeaveJourneyButton } from 'components/Pages/JourneysList/Journey List/LeaveJourneyButton';

interface Props {
	id: string;
	editor: boolean;
}

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
				<Edit id={id} setIsEditing={setIsEditing} />
			) : null}
			<LeaveJourneyButton />
		</>
	);
};
