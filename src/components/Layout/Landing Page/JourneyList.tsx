import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';

import AuthContext from '../../../contexts/AuthProvider';
import firebase from '../../../firebase';

import JourneyPanel from './JourneyPanel';

const Wrapper = styled.div``;

const StyledHeading = styled.h3`
	font-size: 1.4em;
	text-align: center;
	font-weight: lighter;
`;

const JourneyList = () => {
	const [content, setContent] = useState(['']);
	const auth = useContext(AuthContext);
	const journeysRef = firebase.firestore().collection('journeys');
	useEffect(() => {
		if (auth.authenticated === true) {
			journeysRef
				.where('users', 'array-contains', auth.user?.email)
				.get()
				.then((data) => {
					const array = data.docs.map((doc) => doc.data().name);
					setContent(array);
				});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [auth]);

	return (
		<Wrapper>
			<StyledHeading>Twoje plany: </StyledHeading>
			{content.map((x) => (
				<JourneyPanel key={x}>{x}</JourneyPanel>
			))}
		</Wrapper>
	);
};

export default JourneyList;
