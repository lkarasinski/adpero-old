import * as React from 'react';
import { ExpenseForm } from './ExpenseForm';
import firebase from '../../../firebase';
import { ExpenseFormValues } from '../../../utilities/interfaces/ExpenseFormValues';

interface Props {
	id: string;
	setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Edit: React.FC<Props> = ({ id, setIsEditing }) => {
	const journeysRef = firebase.firestore().collection('journeys');
	const docRef = journeysRef.doc(id);

	const updateDatabase = (values: ExpenseFormValues) => {
		docRef.get().then((snap) => {
			const dbData = snap.data();
			const copy = dbData ?? {};
			copy.expenses = values;
			docRef.set(copy);
		});
		setIsEditing(false);
	};

	return (
		<div>
			<ExpenseForm updateDB={updateDatabase} docRef={docRef} />
		</div>
	);
};
