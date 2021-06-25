import styled from 'styled-components';

export const ExpenseTitle = styled.h1`
	font-family: Open Sans;
	font-size: 2.5em;
	width: auto;
	margin: 1rem 0;

	display: inline-block;
	position: relative;

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
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const SpendingSummaryTitle = styled.h3`
	font-size: 1.5em;
`;

export const DetailText = styled.p`
	color: #626262;
	background-color: #f3f3f3;
	font-size: 1.2em;
	padding: 10px;
	margin: 10px;
	border-radius: 15px;
	overflow: wrap;
	grid-row: 1/2;
`;

export const ColorHighlight = styled.span`
	color: #9d62fd;
	font-weight: bold;
`;

export const UnderlineHighlight = styled.span`
	display: inline-block;
	position: relative;
	margin: 0.5rem 0;

	::after {
		content: '';
		position: absolute;
		height: 3px;
		bottom: -5px;
		background-color: #9d62fd;
		margin: 0 auto;
		left: 0;
		width: 100%;
	}
`;
