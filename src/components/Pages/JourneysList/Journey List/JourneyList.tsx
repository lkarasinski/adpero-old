import * as React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import firebase from '../../../../firebase';
import * as yup from 'yup';

import { ErrorMessage } from '../../../Shared/Text decoration/ErrorMessage';
import JourneyPanel from './JourneyPanel';
import { withRouter } from 'react-router-dom';
import { NewJourneyForm } from './NewJourneyForm';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';

const Wrapper = styled.div``;

const StyledHeading = styled.h3`
	font-size: 1.4em;
	text-align: center;
	font-weight: lighter;
`;

const validationSchema = yup.object({
	name: yup
		.string()
		.required('Name is required')
		.min(3, 'Name must be at least 3 characters')
		.max(24, 'Name must be at most 24 characters'),
	users: yup.array(),
});
const journeysRef = firebase.firestore().collection('journeys');

const JourneyList = withRouter(({ history }) => {
	const [auth] = useAuthState(firebase.auth());

	const email = auth?.email ?? '';
	const dataQuery = journeysRef.where('users', 'array-contains', email);
	// .orderBy('name');
	const [collectionData, loading] = useCollection(dataQuery);

	if (loading) {
		return <div>Loading...</div>;
	}

	const handleNewJourney = async (name: string) => {
		if (auth) {
			const userEmail = auth.email;
			if (userEmail) {
				await journeysRef
					.add({
						name: name,
						createdAt: firebase.firestore.FieldValue.serverTimestamp(),
						users: [userEmail],
						author: userEmail,
						editors: [],
						expenses: [],
					})
					.then((docRef) => {
						history.push(`journeys/${docRef.id}`);
					});
			}
		}
	};

	if (!auth) {
		return (
			<Wrapper>
				<ErrorMessage>{`You need to be logged in to access this page.`}</ErrorMessage>
			</Wrapper>
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
		<Wrapper>
			<StyledHeading>Your Journeys: </StyledHeading>
			{displayJourneys()}
			<Formik
				initialValues={{
					name: '',
					users: [],
				}}
				onSubmit={async (values) => {
					handleNewJourney(values.name);
				}}
				validationSchema={validationSchema}
			>
				{({ handleSubmit, errors }) => (
					<NewJourneyForm
						handleSubmit={handleSubmit}
						errors={errors}
					/>
				)}
			</Formik>
			<React.Fragment></React.Fragment>
		</Wrapper>
	);
});

export default JourneyList;
