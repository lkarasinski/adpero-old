import * as React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import firebase from '../../firebase';
import * as yup from 'yup';

import { ErrorMessage } from '../Text decoration/ErrorMessage';
import JourneyPanel from './JourneyPanel';
import { withRouter } from 'react-router-dom';
import { NewJourneyForm } from './NewJourneyForm';

import { sortResultsByCreationDate } from '../../utilities/functions/sortResultsByCreationDate';
import { useAuthState } from 'react-firebase-hooks/auth';

const Wrapper = styled.div``;

const StyledHeading = styled.h3`
	font-size: 1.4em;
	text-align: center;
	font-weight: lighter;
`;

const validationSchema = yup.object({
	name: yup.string().required().min(3, 'Title is too short!'),
	users: yup.array(),
});

const JourneyList = withRouter(({ history }) => {
	const [content, setContent] = React.useState<
		firebase.firestore.DocumentData[]
	>([]);
	const [auth] = useAuthState(firebase.auth());
	const journeysRef = firebase.firestore().collection('journeys');

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

	const getData = () => {
		if (auth) {
			const query = journeysRef.where(
				'users',
				'array-contains',
				auth.email
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

	React.useEffect(() => {
		getData();
	}, [auth]);

	if (!auth) {
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
				validationSchema={validationSchema}
			>
				{({ handleSubmit }) => (
					<NewJourneyForm handleSubmit={handleSubmit} />
				)}
			</Formik>
		</Wrapper>
	);
});

export default JourneyList;
