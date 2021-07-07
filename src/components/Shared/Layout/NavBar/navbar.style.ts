import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { breakpoints } from '@constants/breakpoints';

export const Nav = styled.nav`
	display: flex;
	flex-direction: row;
	align-items: center;
	box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
	padding: 5px 0;
	${breakpoints.maxMedium} {
		justify-content: center;
		padding: 10px 0;
	}
	${breakpoints.xsmall} {
		font-size: 2em;
	}
	${breakpoints.small} {
		font-size: 3em;
	}
	${breakpoints.medium} {
		font-size: 3.5em;
	}
	${breakpoints.large} {
		font-size: 4em;
	}
	${breakpoints.xlarge} {
		font-size: 4em;
	}
	${breakpoints.xxlarge} {
		font-size: 4.5em;
	}
	${breakpoints.xxxlarge} {
		font-size: 8em;
	}
`;

export const StyledNavLink = styled(NavLink)`
	color: black;
	text-decoration: none;
	font-size: 0.4em;
	margin: 0.5em;
	&.active {
		color: #5671fe;
	}
`;

export const StyledUl = styled.ul`
	margin: 1rem;
	display: flex;
	align-items: center;
`;

export const Logo = styled(Link)`
	font-weight: bold;
	text-decoration: none;
	color: #3d5eff;
	font-size: 1em;
	${breakpoints.minLarge} {
		margin-left: 0.5em;
	}
`;
