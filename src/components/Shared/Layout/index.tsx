import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Component imports
import Logo from './Logo';
import Sidebar from './Sidebar';

// Styled components
const Wrapper = styled.div`
	width: 100%;

	grid-template-columns: 1fr 3fr 1fr;

	grid-template-rows: 100px auto;
	display: grid;
	margin-bottom: 5em;
`;

const StyledNavLink = styled(NavLink)`
	color: black;
	text-decoration: none;
	margin: 1rem;

	&.active {
		color: #9d62fd;
		font-weight: bold;
	}
`;

const StyledUl = styled.ul`
	margin: 1rem;
`;

const Content = styled.div`
	grid-row: 2/3;
	grid-column: 2/3;
`;
// Main component
const Layout: React.FC = ({ children }) => {
	return (
		<>
			<Wrapper>
				<Logo />
				<nav>
					<StyledUl>
						<StyledNavLink to="/journeys" activeClassName="active">
							Journeys
						</StyledNavLink>
						<StyledNavLink to="/about" activeClassName="active">
							About
						</StyledNavLink>
						<StyledNavLink to="/settings" activeClassName="active">
							Settings
						</StyledNavLink>
					</StyledUl>
				</nav>
				<Sidebar />
				<Content>{children}</Content>
			</Wrapper>
		</>
	);
};

export default Layout;
