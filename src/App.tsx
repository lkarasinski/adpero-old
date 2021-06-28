import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './fonts.css';

// Components
import Layout from './components/Shared/Layout';

// Pages
import { Home } from 'components/Pages/Home';
import { About } from 'components/Pages/About';
import { JourneysList } from 'components/Pages/JourneysList';
import { PageNotFound } from 'components/Pages/404';
import { JourneyPage } from 'components/Pages/JourneyPage';
import { Join } from 'components/Pages/Join';
import { PollsList } from 'components/Pages/PollsList';
import { PollPage } from 'components/Pages/PollPage';

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
					<Route path="/journeys" exact component={JourneysList} />
					<Route path="/journeys/:id" exact component={JourneyPage} />
					<Route
						path="/journeys/:id/polls"
						exact
						component={PollsList}
					/>
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
