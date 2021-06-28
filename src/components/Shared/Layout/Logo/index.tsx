import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
	display: grid;
	place-items: center;
	font-size: 36px;
	font-weight: bold;
	text-decoration: none;
	color: black;

	grid-column: 1/2;
	grid-row: 1/2;
`;

const Logo: React.FC = () => {
	return <Wrapper to="/">Adpero</Wrapper>;
};

export default Logo;
