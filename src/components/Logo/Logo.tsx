import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
	display: grid;
	place-items: center;
	font-size: 36px;
	font-weight: bold;

	grid-column: 1/2;
	grid-row: 1/2;
`;

const Logo: React.FC = () => {
	return <Wrapper>Adpero</Wrapper>;
};

export default Logo;
