import React, { useContext } from 'react';
import styled from 'styled-components';
import AuthContext from '../../../contexts/AuthProvider';

import JourneyList from './JourneyList';

const Wrapper = styled.div``;
const StyledHeading = styled.h1`
	font-size: 2em;
	text-align: center;
`;

const WelcomePanel = () => {
	const auth = useContext(AuthContext);

	if (auth.authenticated) {
		return (
			<Wrapper>
				<StyledHeading>Witaj {auth.user?.displayName}</StyledHeading>
				<JourneyList />
			</Wrapper>
		);
	} else {
		return (
			<Wrapper>
				<StyledHeading>Witaj nieznajomy</StyledHeading>
			</Wrapper>
		);
	}
};

export default WelcomePanel;
