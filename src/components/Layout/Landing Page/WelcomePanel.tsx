import React, { useContext } from 'react';
import styled from 'styled-components';
import AuthContext from '../../../contexts/AuthProvider';

import JourneyList from './JourneyList';

const Wrapper = styled.div``;

const WelcomePanel = () => {
	const auth = useContext(AuthContext);

	if (auth.authenticated) {
		return (
			<Wrapper>
				<p>Witaj {auth.user?.displayName}</p>
				<JourneyList />
			</Wrapper>
		);
	} else {
		return <Wrapper>Witaj nieznajomy</Wrapper>;
	}
};

export default WelcomePanel;
