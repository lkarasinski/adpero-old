import styled from 'styled-components';
import { breakpoints } from '@constants/breakpoints';

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

	${breakpoints.maxMedium} {
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
	${breakpoints.small} {
		transform: scale(1.4);
	}
	${breakpoints.medium} {
		transform: scale(1.8);
	}
`;

export const Container = styled.button`
	position: absolute;
	background: none;
	border: none;
	right: 30px;
`;
