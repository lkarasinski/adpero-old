import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { Field, Formik } from 'formik';
import firebase from '../../firebase';
import AuthContext from '../../contexts/AuthProvider';

import MediumButton from '../Buttons/MediumButton';

import categories from '../../constants/categories';

const Wrapper = styled.main`
	grid-row: 2/3;
	grid-column: 2/3;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StyledInput = styled.input`
	background-color: #f3f3f3;
	border: none;
	border-radius: 20px;
	padding: 15px;
	margin: 10px;
	width: 300px;

	font-size: 1em;
	font-weight: bold;

	&::placeholder {
		color: #626262;
	}
`;

const CategoryHeading = styled.h1`
	font-size: 3em;
	margin-bottom: 3rem;
	position: relative;

	::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 10px;
		background-color: #6730cf;
		bottom: -15px;
		left: 0;
	}
`;

const InputGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`;

const DetailsPanel = ({ currentCategory }: { currentCategory: string }) => {
	let initial: any = {};
	const [detailsArray, setDetailsArray] = useState(['']);
	const auth = useContext(AuthContext);
	const usersRef = firebase.firestore().collection('users');

	const sendDataToFirebase = async (data: Object) => {
		if (auth.authenticated) {
			const userEmail = auth?.user?.email;
			if (userEmail) {
				const userDocRef = usersRef.doc(userEmail);
				const copy: any = (await userDocRef.get()).data();
				const array = copy.categories.push(data);
				userDocRef.update({ ...copy, array });
			}
		}
	};

	const checkForNewUser = async () => {
		const userName = auth?.user?.displayName;
		const userEmail = auth?.user?.email;
		if (userEmail) {
			usersRef
				.doc(userEmail)
				.get()
				.then((doc) => {
					if (!doc.exists) {
						usersRef
							.doc(userEmail)
							.set({
								name: userName,
								categories: [],
							})
							.catch((err) => {
								console.log(err);
							});
					}
				});
		}
	};

	/* 
	 TODO 
	 Get initial state from firebase, initial values appear only if their content isn't a empty
	*/

	useEffect(() => {
		setDetailsArray(categories[currentCategory]);
	}, [currentCategory]);

	useEffect(() => {
		checkForNewUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [auth]);

	return (
		<Wrapper>
			<CategoryHeading>{_.startCase(currentCategory)}</CategoryHeading>
			<Formik
				initialValues={initial}
				onSubmit={(values) => {
					sendDataToFirebase(values);
				}}
			>
				{({ values, handleSubmit }) => (
					<StyledForm onSubmit={handleSubmit}>
						<InputGrid>
							{detailsArray.map((x, id) => (
								<StyledInput
									as={Field}
									type="text"
									name={_.camelCase(
										`${currentCategory}-${x}`
									)}
									key={
										_.camelCase(`${currentCategory}-${x}`) +
										id
									}
									placeholder={_.startCase(x)}
								/>
							))}
						</InputGrid>
						<MediumButton type="submit">Confirm</MediumButton>
						<pre>{JSON.stringify(values, null, 2)}</pre>
					</StyledForm>
				)}
			</Formik>
		</Wrapper>
	);
};

export default DetailsPanel;
