import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from '@constants/breakpoints';

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

export const Container = styled.div`
	display: grid;
	place-items: center;
`;

export const Nav = styled.nav`
	display: flex;
	align-items: center;
`;

export const Wrapper = styled.div`
	/* MEDIUM */
	${breakpoints.medium} {
		display: grid;
		place-items: center;
	}
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
	font-weight: bold;
	text-decoration: none;
	color: #3d5eff;
`;
