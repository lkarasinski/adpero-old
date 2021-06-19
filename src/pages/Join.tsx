import Layout from 'components/Layout/Layout';
import React, { useContext, useEffect, useState } from 'react';
import firebase from '../firebase';
import AuthContext from '../contexts/AuthProvider';
import { ErrorMessage } from 'components/Text decoration/ErrorMessage';
import { withRouter } from 'react-router-dom';

const invitesRef = firebase.firestore().collection('invites');
const journeysRef = firebase.firestore().collection('journeys');

export const Join = withRouter(({ match, history }) => {
	const auth = useContext(AuthContext);
	const [isInJourney, setIsInJourney] = useState(false);

	const isUserInJourney = () => {
		if (auth.authenticated) {
			invitesRef
				.doc(match.url.split('/')[2])
				.get()
				.then((doc) => {
					const journeyID = doc.data()?.journeyID;
					const journeyDoc = journeysRef.doc(journeyID);
					journeyDoc.get().then((data) => {
						const docData = data.data();
						if (docData?.users.includes(auth.user?.email)) {
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
		if (auth.authenticated) {
			invitesRef
				.doc(match.url.split('/')[2])
				.get()
				.then((doc) => {
					const journeyID = doc.data()?.journeyID;
					const journeyDoc = journeysRef.doc(journeyID);
					journeyDoc.get().then((data) => {
						const docData = data.data();
						console.log(journeyID);
						if (!docData?.users.includes(auth.user?.email)) {
							journeyDoc
								.update({
									users: [
										...data.data()?.users,
										auth.user?.email,
									],
								})
								.then(() => {
									history.push(`/journeys/${journeyID}`);
								});
						}
					});
				});
		}
	};
	if (!auth.authenticated) {
		return (
			<>
				<Layout>
					<ErrorMessage>
						You need to login to join this journey 🥺
					</ErrorMessage>
				</Layout>
			</>
		);
	}

	return (
		<>
			<Layout>
				{isInJourney ? (
					<div>
						You have already joined this journey
						<button
							onClick={() => {
								if (auth.authenticated) {
									invitesRef
										.doc(match.url.split('/')[2])
										.get()
										.then((doc) => {
											const journeyID = doc.data()
												?.journeyID;
											history.push(
												`/journeys/${journeyID}`
											);
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
			</Layout>
		</>
	);
});
