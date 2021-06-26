import React, { useState } from 'react';

import { ExpensesList } from './ExpensesList';
import { Edit } from '../Edit';
import firebase from 'firebase';

interface Props {
	id: string;
	editor: boolean;
}

export const Expenses: React.FC<Props> = ({ id, editor }) => {
	const [isEditing, setIsEditing] = useState(false);
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
		</>
	);
};
