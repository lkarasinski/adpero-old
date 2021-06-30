import firebase from 'firebase';

import { ErrorMessage } from '../../Shared/Text decoration/ErrorMessage';
import JourneyPanel from './JourneyPanel';
import { withRouter } from 'react-router-dom';
import { NewJourneyForm } from './NewJourneyForm';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';

const journeysRef = firebase.firestore().collection('journeys');

/**
 * withRouter component rendering journeys accessible to currently logged in user and a new journey form.
 */
export const JourneysList = withRouter(({ history }) => {
	const [auth, loadingAuth] = useAuthState(firebase.auth());

	const email = auth?.email ?? '';
	const dataQuery = journeysRef.where('users', 'array-contains', email);
	const [collectionData, loading] = useCollection(dataQuery);

	if (loadingAuth) {
		return null;
		// LOADING
	}

	if (loading) {
		return <div>Loading...</div>;
		{
			/* SKELETON */
		}
	}

	if (!auth) {
		return (
			<div>
				<ErrorMessage>{`You need to be logged in to access this page.`}</ErrorMessage>
			</div>
		);
	}

	const displayJourneys = () => {
		if (collectionData) {
			return collectionData.docs.map(
				(data: firebase.firestore.DocumentData, i: number) => {
					return <JourneyPanel key={i} data={data} />;
				}
			);
		}
	};

	return (
		<div>
			<h2>Your Journeys: </h2>
			{displayJourneys()}
			<NewJourneyForm historyPush={(x: string) => history.push(x)} />
		</div>
	);
});
