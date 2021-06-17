import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { AuthProvider } from './contexts/AuthProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './fonts.css';

import { Home } from './pages/Home';

import Layout from './components/Layout/Layout';

const GlobalStyles = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Open Sans'
	}
`;

const App = () => (
	<AuthProvider>
		<GlobalStyles />
		{/* <Layout /> */}
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/" render={() => <div>404</div>} />
			</Switch>
		</BrowserRouter>
	</AuthProvider>
);

export default App;
