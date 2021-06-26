import { SmallButton } from 'components/Buttons/SmallButton';
import firebase from 'firebase';
import * as React from 'react';
import { useDocument } from 'react-firebase-hooks/firestore';
import { RouteComponentProps } from 'react-router-dom';
import { getPollResults } from 'utilities/functions/getPollResults';
import { Expense } from 'utilities/interfaces/Expenses';
import { ExpensePanel } from '../Display/ExpensePanel';
import { ExpenseForm } from '../Edit/ExpenseForm';
import { Heading1 } from '../shared/styledComponents';
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
	getPollResults({
		votes: firebaseData?.data()?.votes,
		options: firebaseData?.data()?.expenses,
	});

	const pollResults = getPollResults({
		votes: firebaseData?.data()?.votes,
		options: firebaseData?.data()?.expenses,
	});

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
					<Heading1>
						{pollResults.length > 1 ? 'Winners' : 'Winner'}
					</Heading1>
					{pollResults.map((expense, key) => (
						<ExpensePanel key={key} expense={expense} />
					))}
					<br />
					<hr />
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
