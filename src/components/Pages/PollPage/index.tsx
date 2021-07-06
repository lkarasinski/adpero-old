// Packages
import * as React from 'react';
import firebase from '@firebase';
import { RouteComponentProps } from 'react-router-dom';
import { useDocument } from 'react-firebase-hooks/firestore';

// Components
import { SmallButton } from '@components/Shared/Buttons/SmallButton';
import { VotingPanel } from './VotingPanel';
import { ExpensePanel } from '@components/Shared/Expenses/Display/ExpensePanel';
import { ExpenseForm } from '@components/Shared/Expenses/ExpenseForm';

// Styled components
import { Heading1 } from '@components/Shared/Expenses/_shared/styledComponents';

// Functions
import { getPollResults } from '@utils/functions/getPollResults';
import { deletePoll } from '@utils/functions/deletePoll';

// Interfaces
import { Expense } from '@utils/interfaces/Expenses';

const pollsRef = firebase.firestore().collection('polls');

/**
 *	Page of the selected poll. Allows to vote and edit polls
 * @param pollid - id of the poll
 * @param id - id of the journey
 * @returns
 */
export const PollPage: React.FC<
	RouteComponentProps<{
		pollid: string;
		id: string;
	}>
> = ({ match, history }) => {
	const [isEditing, setIsEditing] = React.useState(false);
	const docRef = pollsRef.doc(match.params.pollid);
	const [firebaseData, loading] = useDocument(docRef);
	if (loading) {
		return null;
		// SKELETON
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
					<ExpenseForm
						collectionID={'polls'}
						docID={match.params.pollid}
						setIsEditing={setIsEditing}
					/>
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
