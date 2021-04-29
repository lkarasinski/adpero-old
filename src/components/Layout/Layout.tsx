import React, { useState } from 'react';
import styled from 'styled-components';

// Component imports
import CategorySelector from '../Category Selector/CategorySelector';
import DetailsPanel from '../Details Panel/DetailsPanel';
import Logo from '../Logo/Logo';
import Sidebar from '../Sidebar/Sidebar';
import LandingPage from './Landing Page/LandingPage';

// Styled components
const Wrapper = styled.div`
	width: 100%;

	grid-template-columns: 1fr 3fr 1fr;

	grid-template-rows: 100px auto;
	display: grid;
`;

// Main component
const Layout = () => {
	const [currentCategory, setCurrentCategory] = useState('transport');
	const [formActive, setFormActive] = useState(true);

	const displayPageContent = () => {
		if (formActive) {
			return (
				<>
					<CategorySelector
						currentCategory={currentCategory}
						setCurrentCategory={setCurrentCategory}
					/>
					<DetailsPanel currentCategory={currentCategory} />
				</>
			);
		} else {
			return <LandingPage />;
		}
	};

	return (
		<>
			<Wrapper>
				<Logo />
				<button
					onClick={() => {
						setFormActive(!formActive);
					}}
				>
					Zmień panel
				</button>
				<Sidebar />
				{displayPageContent()}
			</Wrapper>
		</>
	);
};

export default Layout;
