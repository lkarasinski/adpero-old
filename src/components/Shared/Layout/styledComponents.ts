import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;

	grid-template-columns: 1fr 3fr 1fr;

	grid-template-rows: 100px auto;
	display: grid;
	margin-bottom: 5em;
`;

export const StyledNavLink = styled(NavLink)`
	color: black;
	text-decoration: none;

	&.active {
		color: #9d62fd;
		font-weight: bold;
	}
`;

export const StyledUl = styled.ul`
	margin: 1rem;
`;

export const Content = styled.div`
	grid-row: 2/3;
	grid-column: 1/4;
`;
