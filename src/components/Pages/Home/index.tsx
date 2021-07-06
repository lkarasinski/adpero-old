import firebase from 'firebase';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Earth } from './Earth';
import { CTA } from './CTA';
import { RouteComponentProps } from 'react-router-dom';
import { Wrapper } from './home.style';

/**
 * Home page with a greeting and a button taking to journeys.
 */
export const Home: React.FC<RouteComponentProps> = ({ history }) => {
	const [auth] = useAuthState(firebase.auth());
	return (
		<Wrapper>
			<Earth />
			<CTA auth={auth} historyPush={history.push} />
		</Wrapper>
	);
};
