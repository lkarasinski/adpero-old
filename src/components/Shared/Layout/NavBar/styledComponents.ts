import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
	color: black;
	text-decoration: none;
	font-size: 24px;
	margin: 30px;
	&.active {
		color: #5671fe;
		/* font-weight: bold; */
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
