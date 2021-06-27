import React from 'react';

import { ExpensesList } from './ExpensesList';
import { Edit } from '../Edit';
import firebase from 'firebase';
import { LeaveJourneyButton } from 'components/Journey List/LeaveJourneyButton';
import { useAuthState } from 'react-firebase-hooks/auth';

interface Props {
	id: string;
	editor: boolean;
}

export const Expenses: React.FC<Props> = ({ id, editor }) => {
	const [isEditing, setIsEditing] = React.useState(false);
	const [auth] = useAuthState(firebase.auth());
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
			<LeaveJourneyButton id={id} auth={auth} />
		</>
	);
};
