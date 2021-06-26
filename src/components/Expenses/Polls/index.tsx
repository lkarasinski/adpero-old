import * as React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { Link, RouteComponentProps } from 'react-router-dom';
import firebase from '../../../firebase';
import { CreateNewPoll } from './CreateNewPoll';

const collectionRef = firebase.firestore().collection('polls');

export const Polls: React.FC<RouteComponentProps<{ id: string }>> = ({
	match,
}) => {
	const query = collectionRef.where('id', '==', match.params.id);
	const [test] = useCollection(query);

	if (!test) {
		return null;
	}
	const pollsData = test?.docs;

	return (
		<>
			{pollsData?.map((poll, index) => {
				const data = poll.data();
				return (
					<div key={index}>
						<h3>{data.title}</h3>
						<p>Votes:</p>
						<ul>
							{data.votes.map(
								(voteData: { test: string }, index: number) => (
									<li key={index}>{voteData.test}</li>
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
