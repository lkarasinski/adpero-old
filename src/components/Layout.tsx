import React from 'react';
import styled from 'styled-components';

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
const Layout: React.FC = () => {
	return (
		<Wrapper>
			<Logo />
			<Sidebar />
			<CategorySelector />
			<DetailsPanel />
		</Wrapper>
	);
};

export default Layout;
