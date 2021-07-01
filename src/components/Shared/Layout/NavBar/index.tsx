import React from 'react';
import { LogInButton } from '../LogInButton';
import Logo from '../Logo';
import { StyledUl, StyledNavLink, Container, Nav } from './styledComponents';

export const NavBar: React.FC = () => {
	return (
		<>
			<Container>
				<Logo />
			</Container>
			<Nav>
				<StyledUl>
					<StyledNavLink to="/home" activeClassName="active">
						Home
					</StyledNavLink>
					<StyledNavLink to="/journeys" activeClassName="active">
						Journeys
					</StyledNavLink>
					<StyledNavLink to="/about" activeClassName="active">
						About
					</StyledNavLink>
				</StyledUl>
			</Nav>
			<Container>
				<LogInButton />
			</Container>
		</>
	);
};
