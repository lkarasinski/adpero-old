import React, { useState, useContext } from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Component imports
import CategorySelector from '../Category Selector/CategorySelector';
import DetailsPanel from '../Details Panel/DetailsPanel';
import Logo from '../Logo/Logo';
import Sidebar from '../Sidebar/Sidebar';

// Styled components
const Wrapper = styled.div`
	width: 100%;

	grid-template-columns: 1fr 3fr 1fr;

	grid-template-rows: 100px auto;
	display: grid;
`;

// Main component
const Layout: React.FC = ({ children }) => {
	return (
		<>
			<Wrapper>
				<Logo />
				<nav>
					<ul>
						<NavLink to="/journeys">Journeys</NavLink>
						<NavLink to="/about">About</NavLink>
						<NavLink to="/settings">Settings</NavLink>
					</ul>
				</nav>
				<Sidebar />
				{children}
			</Wrapper>
		</>
	);
};

export default Layout;
