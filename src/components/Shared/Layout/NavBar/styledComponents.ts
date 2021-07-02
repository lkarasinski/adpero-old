import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
