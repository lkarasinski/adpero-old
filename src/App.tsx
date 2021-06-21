import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { AuthProvider } from './contexts/AuthProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './fonts.css';

// Components
import Layout from './components/Layout/Layout';

// Pages
import { Home } from 'pages/Home';
import { About } from 'pages/About';
import { Journeys } from 'pages/Journeys';
import { Settings } from 'pages/Settings';
import { PageNotFound } from 'pages/404';
import { Journey } from 'pages/Journey';
import { Join } from 'pages/Join';

const GlobalStyles = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Open Sans'
	}
`;

const App: React.FC = () => (
	<AuthProvider>
		<GlobalStyles />
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" exact component={About} />
					<Route path="/settings" exact component={Settings} />
					<Route path="/journeys" exact component={Journeys} />
					<Route path="/journeys/:id" component={Journey} />
					<Route path="/join/:id" component={Join} />
					<Route path="/" component={PageNotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	</AuthProvider>
);

export default App;
