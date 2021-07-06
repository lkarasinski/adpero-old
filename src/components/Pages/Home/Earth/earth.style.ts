import styled from 'styled-components';
import { breakpoints } from '@constants/breakpoints';
export const CanvasContainer = styled.div`
	margin-top: 0.5em;
	margin-bottom: 1em;

	${breakpoints.xsmall} {
		width: 200px;
		height: 200px;
	}
	${breakpoints.small} {
		width: 300px;
		height: 300px;
	}
	${breakpoints.medium} {
		width: 350px;
		height: 350px;
	}
	${breakpoints.large} {
		width: 400px;
		height: 400px;
	}
	${breakpoints.xlarge} {
		width: 500px;
		height: 500px;
	}
	${breakpoints.xxlarge} {
		width: 600px;
		height: 600px;
	}
`;

export const EarthPanel = styled.div`
	display: grid;
	place-items: center;
	margin-top: 1.5em;
	${breakpoints.xsmall} {
		font-size: 1em;
	}
	${breakpoints.small} {
		font-size: 1.25em;
		margin-top: 1em;
	}
	${breakpoints.medium} {
		font-size: 1.5em;
		margin-top: 1em;
	}
	${breakpoints.large} {
		font-size: 1.75em;
		margin-left: 50px;
		grid-column: 2/3;
		grid-row: 1/2;
	}
	${breakpoints.xlarge} {
		font-size: 2em;
		grid-column: 2/3;
		grid-row: 1/2;
	}
	${breakpoints.xxlarge} {
		font-size: 2em;
		grid-column: 2/3;
		grid-row: 1/2;
	}
`;

export const Highlight = styled.span`
	color: #5671fe;
	font-weight: bold;
	position: relative;
	display: inline-block;

	::before {
		content: '';
		position: absolute;
		display: block;
		width: 100%;
		height: 10px;
		bottom: 0;
		background: linear-gradient(90deg, #5671fe -4.22%, #4ac7ff 100%);
		border-radius: 2px;
	}
`;

export const EarthHeading = styled.h2`
	font-family: Poppins, sans-serif;
	font-style: normal;
	font-weight: 500;
	line-height: 1.75em;
`;
