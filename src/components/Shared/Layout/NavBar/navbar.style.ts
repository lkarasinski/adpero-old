import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from '@constants/breakpoints';

export const Nav = styled.nav`
	display: flex;
	flex-direction: row;
	align-items: center;
	box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
	${breakpoints.maxMedium} {
		justify-content: center;
		padding: 10px 0;
	}
`;

export const StyledNavLink = styled(NavLink)`
	color: black;
	text-decoration: none;
	font-size: 24px;
	margin: 20px;
	&.active {
		color: #5671fe;
	}
`;

export const StyledUl = styled.ul`
	margin: 1rem;
`;

export const Logo = styled(Link)`
	/* EXTRA SMALL */
	${breakpoints.xsmall} {
		font-size: 2em;
	}
	/* SMALL */
	${breakpoints.small} {
		font-size: 3em;
	}
	/*  MEDIUM*/
	${breakpoints.medium} {
		font-size: 3.5em;
	}
	/* LARGE */
	${breakpoints.large} {
		font-size: 4em;
		margin-left: 20px;
	}
	${breakpoints.xlarge} {
		font-size: 4em;
		margin-left: 20px;
	}
	${breakpoints.xxlarge} {
		font-size: 4em;
		margin-left: 20px;
	}
	font-weight: bold;
	text-decoration: none;
	color: #3d5eff;
`;
