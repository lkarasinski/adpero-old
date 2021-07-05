import firebase from 'firebase';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Earth } from './Earth';
import { CTA } from './CTA';
import { RouteComponentProps } from 'react-router-dom';
import {
	CTAPanel,
	EarthHeading,
	EarthPanel,
	Highlight,
	Wrapper,
} from './home.style';

/**
 * Home page with a greeting and a button taking to journeys.
 */
export const Home: React.FC<RouteComponentProps> = ({ history }) => {
	const [auth, loading] = useAuthState(firebase.auth());
	if (loading)
		return (
			<h1>
				<>Loading</>
			</h1>
		);

	return (
		<Wrapper>
			<CTAPanel>
				<CTA auth={auth} historyPush={history.push} />
			</CTAPanel>
			<EarthPanel>
				<EarthHeading>
					Manage your journeys <Highlight>easier</Highlight>
				</EarthHeading>
				<Earth />
			</EarthPanel>
		</Wrapper>
	);
};
