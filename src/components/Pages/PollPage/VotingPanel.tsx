import React, { ChangeEvent } from 'react';
import firebase from '@firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDocument } from 'react-firebase-hooks/firestore';
import { Vote } from '@utils/interfaces/Votes';

interface Props {
	id: number;
	docRef: firebase.firestore.DocumentReference<firebase.firestore.DocumentData>;
}

/**
 * Renders form with a select allowiong to choose value of your vote.
 * @param id
 * @param docRef
 */
export const VotingPanel: React.FC<Props> = ({ id, docRef }) => {
	const [auth, loadingAuth] = useAuthState(firebase.auth());
	const [documentData, loading] = useDocument(docRef);
	const [value, setValue] = React.useState<number>();

	if (loadingAuth) {
		return null;
		// LOADING
	}

	React.useEffect(() => {
		getInitialData();
	}, [loading, documentData]);

	const getInitialData = () => {
		const thisVote = documentData
			?.data()
			?.votes.filter(
				(vote: Vote) => vote.id === id && vote.email === auth?.email
			);
		if (!loading) {
			setValue(thisVote[0]?.value);
		}
	};

	const handleSubmit = (e: ChangeEvent<HTMLSelectElement>) => {
		setValue(Number(e.target.value));
		const votesArray = documentData
			?.data()
			?.votes.filter(
				(vote: Vote) => !(vote.id === id && vote.email === auth?.email)
			);

		const copy = { ...documentData?.data() };
		votesArray.push({ id: id, email: auth?.email, value: e.target.value });
		copy.votes = votesArray;
		docRef.update(copy);
	};

	if (loading) {
		return null;
		// SKELETON
	}

	return (
		<div>
			<form>
				<select onChange={(e) => handleSubmit(e)} value={value}>
					<option value="1">⭐️</option>
					<option value="2">⭐️⭐️</option>
					<option value="3">⭐️⭐️⭐️</option>
					<option value="4">⭐️⭐️⭐️⭐️</option>
					<option value="5">⭐️⭐️⭐️⭐️⭐️</option>
				</select>
			</form>
		</div>
	);
};
