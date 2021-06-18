import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Field, Formik } from 'formik';
import AuthContext from '../../contexts/AuthProvider';
import firebase from '../../firebase';

import { ErrorMessage } from '../Text decoration/ErrorMessage';
import JourneyPanel from './JourneyPanel';
import { withRouter } from 'react-router-dom';

const Wrapper = styled.div``;

const StyledHeading = styled.h3`
	font-size: 1.4em;
	text-align: center;
	font-weight: lighter;
`;

const NewJourneyButton = styled.button`
	border: 0.4rem solid #98cf30;
	border-radius: 1rem;
	padding: 1rem;
	background-color: transparent;
	cursor: pointer;
`;

const sortResultsByCreationDate = (
	array: firebase.firestore.DocumentData[]
) => {
	const compareDate = (a: any, b: any) => {
		return a.createdAt.seconds > b.createdAt.seconds
			? -1
			: a.createdAt.seconds < b.createdAt.seconds
			? 1
			: 0;
	};
	array.sort(compareDate);
};

const JourneyList = withRouter(({ history }) => {
	const [content, setContent] = useState<firebase.firestore.DocumentData[]>(
		[]
	);
	const auth = useContext(AuthContext);
	const journeysRef = firebase.firestore().collection('journeys');

	useEffect(() => {
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
					if (auth.authenticated === true) {
						const userEmail = auth?.user?.email;
						if (userEmail) {
							await journeysRef
								.add({
									name: values.name,
									createdAt: firebase.firestore.FieldValue.serverTimestamp(),
									users: [userEmail],
								})
								.then((docRef) => {
									history.push(`journeys/${docRef.id}`);
								});
						}
					}
				}}
			>
				{({ values, handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<div>
							<Field
								type="text"
								name={'name'}
								placeholder={'Where are you going?'}
							/>
						</div>
						<NewJourneyButton type="submit">
							Create new journey
						</NewJourneyButton>
					</form>
				)}
			</Formik>
		</Wrapper>
	);
});

export default JourneyList;
