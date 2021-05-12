import React from 'react';
import styled from 'styled-components';

import WelcomePanel from './WelcomePanel';

const Wrapper = styled.div`
	grid-column: 2/3;
`;

const LandingPage = () => {
	return (
		<Wrapper>
			<WelcomePanel />
		</Wrapper>
	);
};

export default LandingPage;
