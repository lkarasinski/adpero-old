import * as React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Expense } from 'interfaces/Expenses';
import firebase from '../../../firebase';
import { CreateNewPoll } from './CreateNewPoll';

const collectionRef = firebase.firestore().collection('polls');

/**
 * Renders a list of polls attached to the journey of given id
 * @param id
 */

export const PollsList: React.FC<RouteComponentProps<{ id: string }>> = ({
	match,
}) => {
	const query = collectionRef.where('id', '==', match.params.id);
	const [collection] = useCollection(query);
	if (!collection) {
		return null;
	}
	const pollsData = collection?.docs;
	console.log(pollsData.length);

	return (
		<>
			{pollsData?.map((poll, index) => {
				const data = poll.data();
				return (
					<div key={index}>
						<h3>{data.title}</h3>
						<p>Options:</p>
						<ul>
							{data.expenses.map(
								(expenseData: Expense, index: number) => (
									<li key={index}>{expenseData.title}</li>
								)
							)}
						</ul>
						<Link
							to={`/journeys/${match.params.id}/polls/${poll.id}`}
						>
							<button>go</button>
						</Link>
					</div>
				);
			})}
			<CreateNewPoll id={match.params.id} />
		</>
	);
};
