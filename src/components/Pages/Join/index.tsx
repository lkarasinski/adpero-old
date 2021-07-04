import React, { useEffect } from 'react';
import firebase from '@firebase';
import { ErrorMessage } from '@components/Shared/Text decoration/ErrorMessage';
import { RouteComponentProps } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

const invitesRef = firebase.firestore().collection('invites');
const journeysRef = firebase.firestore().collection('journeys');

/**
 * Page with a join button. After clicking the button, logged in user will be added to the journey with id of the matching link id
 */
export const Join: React.FC<RouteComponentProps> = ({ match, history }) => {
	const [auth, loading] = useAuthState(firebase.auth());
	const [isInJourney, setIsInJourney] = React.useState(false);

	if (loading) {
		return null;
		// LOADING
	}
	const isUserInJourney = () => {
		if (auth) {
			invitesRef
				.doc(match.url.split('/')[2])
				.get()
				.then((doc) => {
					const journeyID = doc.data()?.journeyID;
					const journeyDoc = journeysRef.doc(journeyID);
					journeyDoc.get().then((data) => {
						const docData = data.data();
						if (docData?.users.includes(auth.email)) {
							setIsInJourney(true);
						} else {
							setIsInJourney(false);
						}
					});
				});
		}
	};

	useEffect(() => {
		isUserInJourney();
	}, [auth]);

	const joinJourney = () => {
		if (auth) {
			invitesRef
				.doc(match.url.split('/')[2])
				.get()
				.then((doc) => {
					const journeyID = doc.data()?.journeyID;
					const journeyDoc = journeysRef.doc(journeyID);
					journeyDoc.get().then((data) => {
						const docData = data.data();
						if (!docData?.users.includes(auth.email)) {
							journeyDoc
								.update({
									users: [...data.data()?.users, auth.email],
								})
								.then(() => {
									history.push(`/journeys/${journeyID}`);
								});
						}
					});
				});
		}
	};
	if (!auth) {
		return (
			<>
				<ErrorMessage>
					You need to login to join this journey 🥺
					{/* LOADING */}
				</ErrorMessage>
			</>
		);
	}

	return (
		<>
			{isInJourney ? (
				<div>
					You have already joined this journey
					<button
						onClick={() => {
							if (auth) {
								invitesRef
									.doc(match.url.split('/')[2])
									.get()
									.then((doc) => {
										const journeyID = doc.data()?.journeyID;
										history.push(`/journeys/${journeyID}`);
									});
							}
						}}
					>
						Go to the journey
					</button>
				</div>
			) : (
				<button onClick={joinJourney}>Join journey</button>
			)}
		</>
	);
};
