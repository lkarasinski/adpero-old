import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../contexts/AuthProvider';

// Component imports
import CategorySelector from './Category Selector/CategorySelector';
import DetailsPanel from './Details Panel/DetailsPanel';
import Logo from './Logo/Logo';
import Sidebar from './Sidebar/Sidebar';

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

	return (
		<>
			<Wrapper>
				<Logo />
				<Sidebar />
				<CategorySelector
					currentCategory={currentCategory}
					setCurrentCategory={setCurrentCategory}
				/>
				<DetailsPanel currentCategory={currentCategory} />
			</Wrapper>
			{JSON.stringify(useContext(AuthContext))}
		</>
	);
};

export default Layout;
