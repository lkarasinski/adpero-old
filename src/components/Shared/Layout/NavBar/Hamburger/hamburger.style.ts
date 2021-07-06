import styled from 'styled-components';
import { breakpoints } from '@constants/breakpoints';

const spacing = 8;

export const HamburgerButton = styled.div`
	background-color: black;
	position: absolute;
	display: block;
	::after,
	::before {
		content: '';
		left: 0;
		position: absolute;
		background-color: black;
	}

	${breakpoints.xsmall} {
		left: -20px;
		width: 20px;
		height: 3px;
		::after,
		::before {
			width: 20px;
			height: 3px;
		}
		::after {
			top: 8px;
		}
		::before {
			bottom: 8px;
		}
	}
`;

export const Container = styled.button`
	position: fixed;
	top: ${13 + spacing}px;
	right: 13px;
	background: none;
	border: none;
`;
