import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './fonts.css';

// Components
import Layout from './components/Layout';

// Pages
import { Home } from 'pages/Home';
import { About } from 'pages/About';
import { Journeys } from 'pages/Journeys';
import { Settings } from 'pages/Settings';
import { PageNotFound } from 'pages/404';
import { Journey } from 'pages/Journey';
import { Join } from 'pages/Join';
import { Polls } from 'components/Expenses/Polls';
import { PollPage } from 'components/Expenses/Polls/PollPage';

const GlobalStyles = createGlobalStyle`
	*, *::after, *::before{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Open Sans'
	}
`;

const App: React.FC = () => (
	<>
		<GlobalStyles />
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" exact component={About} />
					<Route path="/settings" exact component={Settings} />
					<Route path="/journeys" exact component={Journeys} />
					<Route path="/journeys/:id" exact component={Journey} />
					<Route path="/journeys/:id/polls" exact component={Polls} />
					<Route
						path="/journeys/:id/polls/:pollid"
						exact
						component={PollPage}
					/>
					<Route path="/join/:id" component={Join} />
					<Route path="/" component={PageNotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	</>
);

export default App;
