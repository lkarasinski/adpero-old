import React, { useContext } from 'react';
import styled from 'styled-components';
import useCollectionData from 'react-firebase-hooks/firestore';

import firebase from '../../firebase';
import { AuthContext } from '../../contexts/AuthProvider';

const Wrapper = styled.div``;

const LandingPage = () => {
	const auth = useContext(AuthContext);
	const userEmail = auth?.user?.email;

	const journeysRef = firebase.firestore().collection('journeys');

	if (auth.authenticated && userEmail) {
		const query = journeysRef
			.where('name', '==', 'test')
			// .where('users', 'array-contains', userEmail)
			.get();

		console.log(query);
		return <div></div>;
	}

	return <Wrapper>Not found</Wrapper>;
};

export default LandingPage;
