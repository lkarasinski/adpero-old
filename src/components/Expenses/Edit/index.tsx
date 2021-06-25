import * as React from 'react';
import { ExpenseForm } from './ExpenseForm';
import firebase from '../../../firebase';

interface Props {
	id: string;
	setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Edit: React.FC<Props> = ({ id, setIsEditing }) => {
	const journeysRef = firebase.firestore().collection('journeys');
	const docRef = journeysRef.doc(id);

	return (
		<div>
			<ExpenseForm setIsEditing={setIsEditing} docRef={docRef} />
		</div>
	);
};
