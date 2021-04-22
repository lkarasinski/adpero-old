import React from 'react';
import { createGlobalStyle } from 'styled-components';
import './fonts.css';

import Layout from './components/Layout';

const GlobalStyles = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Open Sans'
	}
`;

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Layout />
		</>
	);
};

export default App;
