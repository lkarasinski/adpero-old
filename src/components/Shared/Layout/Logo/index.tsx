import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
	font-size: 64px;
	font-weight: bold;
	text-decoration: none;
	color: #3d5eff;
`;

const Logo: React.FC = () => {
	return <Wrapper to="/">Adpero</Wrapper>;
};

export default Logo;
