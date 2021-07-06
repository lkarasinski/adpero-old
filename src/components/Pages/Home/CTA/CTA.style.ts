import styled from 'styled-components';
import { breakpoints } from '@constants/breakpoints';

export const Container = styled.div`
	display: grid;
	place-items: center;
	/* LARGE */
	${breakpoints.large} {
		grid-column: 1/2;
		grid-row: 1/2;
	}
	/* EXTRA LARGE */
	${breakpoints.xlarge} {
		grid-column: 1/2;
		grid-row: 1/2;
	}
`;

export const Button = styled.button`
	border: none;
	border-radius: 10px;
	background: linear-gradient(96.08deg, #3d5eff 0%, #4ac7ff 100%);
	font-size: 2.5em;
	/* EXTRA SMALL */
	${breakpoints.xsmall} {
		font-size: 1.5em;
	}
	/* SMALL */
	${breakpoints.small} {
		font-size: 2em;
	}
	/* MEDIUM */
	${breakpoints.medium} {
		font-size: 2.25em;
	}
	/* LARGE */
	${breakpoints.large} {
		font-size: 2.25em;
	}
	/* EXTRA LARGE */
	${breakpoints.xlarge} {
		font-size: 2.5em;
	}

	overflow-wrap: normal;
	font-family: Poppins;
	font-style: normal;
	font-weight: bold;
	padding: 0.5em 1.5em;
	line-height: 1.5em;
	color: #ffffff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Heading = styled.h2`
	font-family: Poppins;
	font-style: normal;
	font-weight: 500;
	text-align: center;
	margin-bottom: 0.5em;
	/* EXTRA SMALL */
	${breakpoints.xsmall} {
		font-size: 1.25em;
	}
	/* SMALL */
	${breakpoints.small} {
		font-size: 1.5em;
	}
	/* MEDIUM */
	${breakpoints.medium} {
		font-size: 2em;
	}
	/* LARGE */
	${breakpoints.large} {
		font-size: 1.55em;
	}
	/* EXTRA LARGE */
	${breakpoints.xlarge} {
		font-size: 2em;
	}
`;
