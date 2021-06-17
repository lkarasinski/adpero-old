import React, { useState, useContext } from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';

// Component imports
import CategorySelector from '../Category Selector/CategorySelector';
import DetailsPanel from '../Details Panel/DetailsPanel';
import Logo from '../Logo/Logo';
import Sidebar from '../Sidebar/Sidebar';
import LandingPage from '../Landing Page/LandingPage';

// Context
import { useJourney, useJourneyUpdate } from '../../contexts/SelectedJourney';

// Styled components
const Wrapper = styled.div`
	width: 100%;

	grid-template-columns: 1fr 3fr 1fr;

	grid-template-rows: 100px auto;
	display: grid;
`;

// Main component
const Layout: React.FC = ({ children }) => {
	const [currentCategory, setCurrentCategory] = useState('transport');
	const [formActive, setFormActive] = useState('');
	const Context = useJourney();
	const Update = useJourneyUpdate();

	return (
		<>
			<Wrapper>
				<Logo />
				<Sidebar />
				{children}
			</Wrapper>
		</>
	);
};

export default Layout;
