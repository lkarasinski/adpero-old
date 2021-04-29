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
	let unsubscribe;

	if (auth.authenticated && userEmail) {
		unsubscribe = journeysRef
			.where('name', '==', 'test')
			.onSnapshot((querySnapshot) => {
				const items = querySnapshot.docs.map((doc) => {
					console.log(doc.data().name);
					return <div>{doc.data().name}</div>;
				});
				return items;
			});
	}

	return <Wrapper>Not found</Wrapper>;
};

export default LandingPage;
