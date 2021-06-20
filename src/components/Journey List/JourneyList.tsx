import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import AuthContext from '../../contexts/AuthProvider';
import firebase from '../../firebase';

import { ErrorMessage } from '../Text decoration/ErrorMessage';
import JourneyPanel from './JourneyPanel';
import { withRouter } from 'react-router-dom';
import { NewJourneyForm } from './NewJourneyForm';

import { sortResultsByCreationDate } from '../../utilities/functions';

const Wrapper = styled.div``;

const StyledHeading = styled.h3`
	font-size: 1.4em;
	text-align: center;
	font-weight: lighter;
`;

const JourneyList = withRouter(({ history }) => {
	const [content, setContent] = useState<firebase.firestore.DocumentData[]>(
		[]
	);
	const auth = useContext(AuthContext);
	const journeysRef = firebase.firestore().collection('journeys');

	const handleNewJourney = async (name: string) => {
		if (auth.authenticated === true) {
			const userEmail = auth?.user?.email;
			if (userEmail) {
				await journeysRef
					.add({
						name: name,
						createdAt: firebase.firestore.FieldValue.serverTimestamp(),
						users: [userEmail],
						author: userEmail,
					})
					.then((docRef) => {
						history.push(`journeys/${docRef.id}`);
					});
			}
		}
	};

	const getData = () => {
		if (auth.authenticated === true) {
			const query = journeysRef.where(
				'users',
				'array-contains',
				auth.user?.email
			);

			query.get().then((data) => {
				const array = data.docs.map((doc) => {
					const tempData = doc.data();
					const docId = doc.id;
					return { ...tempData, docId };
				});
				sortResultsByCreationDate(array);
				setContent(array);
			});
		} else {
			setContent([]);
		}
	};

	useEffect(() => {
		getData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [auth]);

	if (!auth.authenticated) {
		return (
			<Wrapper>
				<ErrorMessage>{`You need to be logged in to access this page.`}</ErrorMessage>
			</Wrapper>
		);
	}

	return (
		<Wrapper>
			<StyledHeading>Your Journeys: </StyledHeading>
			{content.map((data, id) => (
				<JourneyPanel data={data} key={id} />
			))}
			<Formik
				initialValues={{
					name: '',
					users: [],
				}}
				onSubmit={async (values) => {
					handleNewJourney(values.name);
				}}
			>
				{({ handleSubmit }) => (
					<NewJourneyForm handleSubmit={handleSubmit} />
				)}
			</Formik>
		</Wrapper>
	);
});

export default JourneyList;
