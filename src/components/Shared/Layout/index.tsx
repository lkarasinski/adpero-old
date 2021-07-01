import React from 'react';
import { NavBar } from './NavBar';
import { Content, Wrapper } from './styledComponents';

const Layout: React.FC = ({ children }) => {
	return (
		<>
			<Wrapper>
				<NavBar />
				<Content>{children}</Content>
			</Wrapper>
		</>
	);
};

export default Layout;
