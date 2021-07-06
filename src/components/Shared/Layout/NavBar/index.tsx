import React from 'react';
import { LogInButton } from './LogInButton';
import { Hamburger } from './Hamburger';
import {
	Logo,
	StyledUl,
	StyledNavLink,
	Container,
	Nav,
	Wrapper,
} from './navbar.style';

export const NavBar: React.FC = () => {
	const width = window.innerWidth;
	return (
		<Wrapper>
			<Container>
				<Logo to={'/'}>Adpero</Logo>
			</Container>
			{width > 95000 ? (
				<>
					<Nav>
						<StyledUl>
							<StyledNavLink to="/home" activeClassName="active">
								Home
							</StyledNavLink>
							<StyledNavLink
								to="/journeys"
								activeClassName="active"
							>
								Journeys
							</StyledNavLink>
							<StyledNavLink to="/about" activeClassName="active">
								About
							</StyledNavLink>
						</StyledUl>
					</Nav>
				</>
			) : null}
			{/* <Container>
				<LogInButton />
			</Container> */}
			<Hamburger />
		</Wrapper>
	);
};
