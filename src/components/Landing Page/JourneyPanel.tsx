import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	font-size: 1.3em;
	margin: 2rem;
	border: 0.4rem #6730cf solid;
	border-radius: 1rem;
	padding: 1rem;
`;

const JourneyPanel: React.FC = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};

export default JourneyPanel;
