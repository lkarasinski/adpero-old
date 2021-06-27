// Packages
import * as React from 'react';
import firebase from 'firebase';
import { RouteComponentProps } from 'react-router-dom';
import { useDocument } from 'react-firebase-hooks/firestore';

// Components
import { SmallButton } from 'components/Buttons/SmallButton';
import { VotingPanel } from './VotingPanel';
import { ExpensePanel } from '../Display/ExpensePanel';
import { ExpenseForm } from '../Edit/ExpenseForm';

// Styled components
import { Heading1 } from '../shared/styledComponents';

// Functions
import { getPollResults } from 'utilities/functions/getPollResults';
import { deletePoll } from 'utilities/functions/deletePoll';

// Interfaces
import { Expense } from 'utilities/interfaces/Expenses';

const pollsRef = firebase.firestore().collection('polls');

export const PollPage: React.FC<RouteComponentProps<{
	pollid: string;
	id: string;
}>> = ({ match, history }) => {
	const [isEditing, setIsEditing] = React.useState(false);
	const docRef = pollsRef.doc(match.params.pollid);
	const [firebaseData, loading] = useDocument(docRef);
	if (loading) {
		return null;
	}
	let pollResults: Expense[] = [];
	if (firebaseData?.data()?.votes.length) {
		pollResults = getPollResults({
			votes: firebaseData?.data()?.votes,
			options: firebaseData?.data()?.expenses,
		});
	}
	return (
		<>
			<div>
				<SmallButton onClick={() => setIsEditing(!isEditing)}>
					{isEditing ? 'Stop editing' : 'Edit'}
				</SmallButton>
			</div>
			{isEditing || !pollResults ? (
				<>
					<ExpenseForm docRef={docRef} setIsEditing={setIsEditing} />
					<button
						onClick={() => {
							deletePoll(match.params.pollid);
							history.push(`/journeys/${match.params.id}/polls`);
						}}
					>
						Delete poll
					</button>
				</>
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
