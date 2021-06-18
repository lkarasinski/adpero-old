import React from 'react';
import styled from 'styled-components';

interface Props {}

const Wrapper = styled.span`
	color: red;
	font-weight: bold;
	margin: 0 5px;
`;

export const ErrorMessage: React.FC<Props> = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};
