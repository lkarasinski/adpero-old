import { SmallButton } from 'components/Buttons/SmallButton';
import firebase from 'firebase';
import * as React from 'react';
import { useDocument } from 'react-firebase-hooks/firestore';
import { RouteComponentProps } from 'react-router-dom';
import { Expense } from 'utilities/interfaces/Expenses';
import { ExpensePanel } from '../Display/ExpensePanel';
import { ExpenseForm } from '../Edit/ExpenseForm';
import { VotingPanel } from './VotingPanel';

const pollsRef = firebase.firestore().collection('polls');

export const PollPage: React.FC<RouteComponentProps<{ pollid: string }>> = ({
	match,
}) => {
	const [isEditing, setIsEditing] = React.useState(false);
	const docRef = pollsRef.doc(match.params.pollid);
	const [firebaseData, loading] = useDocument(docRef);
	if (loading) {
		return null;
	}
	return (
		<>
			<div>
				<SmallButton onClick={() => setIsEditing(!isEditing)}>
					{isEditing ? 'Stop editing' : 'Edit'}
				</SmallButton>
			</div>
			{isEditing ? (
				<ExpenseForm docRef={docRef} setIsEditing={setIsEditing} />
			) : (
				<>
					{firebaseData
						?.data()
						?.expenses?.map((pollDetails: Expense, i: number) => (
							<div key={i}>
								<ExpensePanel expense={pollDetails} />
								<VotingPanel id={i} docRef={docRef} />
							</div>
						))}
				</>
			)}
		</>
	);
};
