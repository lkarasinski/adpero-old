import styled from 'styled-components';
import { breakpoints } from '@constants/breakpoints';

export const Container = styled.div`
	display: grid;
	place-items: center;
	${breakpoints.minLarge} {
		grid-column: 1/2;
		grid-row: 1/2;
	}
	${breakpoints.xsmall} {
		font-size: 1.5em;
	}
	${breakpoints.small} {
		font-size: 2em;
	}
	${breakpoints.medium} {
		font-size: 2.25em;
	}
	${breakpoints.large} {
		font-size: 2.25em;
	}
	/* Edge case for cta button */
	@media (min-width: 769px) and (max-width: 840px) {
		font-size: 1.8em;
	}
	${breakpoints.xlarge} {
		font-size: 3em;
	}
	${breakpoints.xxlarge} {
		font-size: 3.5em;
	}
	${breakpoints.xxxlarge} {
		font-size: 5em;
	}
`;

export const Button = styled.button`
	border: none;
	border-radius: 10px;
	background: linear-gradient(96.08deg, #3d5eff 0%, #4ac7ff 100%);
	font-size: 1em;
	overflow-wrap: normal;
	font-family: Poppins, sans-serif;
	font-style: normal;
	font-weight: bold;
	padding: 0.5em 1.5em;
	line-height: 1.5em;
	color: #ffffff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Heading = styled.h2`
	font-family: Poppins, sans-serif;
	font-style: normal;
	font-weight: 500;
	text-align: center;
	margin-bottom: 0.5em;

	font-size: 0.75em;
`;
