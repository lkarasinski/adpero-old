import styled from 'styled-components';

export const ExpenseTitle = styled.h1`
	font-family: Open Sans;
	font-size: 2.5em;
	position: relative;
	width: auto;
	display: inline-block;
	margin: 1rem 0;

	::after {
		content: '';
		position: absolute;
		height: 6px;
		bottom: -8px;
		background-color: #9d62fd;
		margin: 0 auto;
		left: 0;
		width: 100%;
	}
`;

export const DetailTextContainer = styled.div`
	display: flex;
`;

export const DetailText = styled.p`
	color: #626262;
	background-color: #f3f3f3;
	font-size: 1.2em;
	padding: 10px;
	margin: 10px;
	border-radius: 15px;
	width: 100%;
	max-width: 400px;
	flex-grow: 1;
	overflow: wrap;
`;
