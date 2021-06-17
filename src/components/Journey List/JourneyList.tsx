import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Field, Formik } from 'formik';
import AuthContext from '../../contexts/AuthProvider';
import firebase from '../../firebase';

import JourneyPanel from './JourneyPanel';

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

const JourneyList = () => {
	const [content, setContent] = useState<firebase.firestore.DocumentData[]>(
		[]
	);
	const auth = useContext(AuthContext);
	const journeysRef = firebase.firestore().collection('journeys');

	useEffect(() => {
		if (auth.authenticated === true) {
			journeysRef
				.where('users', 'array-contains', auth.user?.email)
				.get()
				.then((data) => {
					const array = data.docs.map((doc) => {
						const tempData = doc.data();
						const docId = doc.id;
						return { ...tempData, docId };
					});
					setContent(array);
				});
		} else {
			setContent([]);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [auth]);

	return (
		<Wrapper>
			<StyledHeading>Twoje plany: </StyledHeading>
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
							await journeysRef.add({
								name: values.name,
								createdAt: firebase.firestore.FieldValue.serverTimestamp(),
								users: [userEmail],
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
								placeholder={'gdzie leziesz'}
							/>
						</div>
						<NewJourneyButton type="submit">
							Confirm
						</NewJourneyButton>
					</form>
				)}
			</Formik>
		</Wrapper>
	);
};

export default JourneyList;
