import firebase from 'firebase';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components';

import { Earth } from './Earth';
import { CTA } from './CTA';
import { RouteComponentProps } from 'react-router-dom';

const Wrapper = styled.div`
	grid-row: 2/3;
	grid-column: 2/3;
	display: flex;
	flex-direction: column;
	gap: 10rem;
`;

const StyledHeading = styled.h1`
	font-size: 2em;
	text-align: center;
`;

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
		<>
			<Wrapper>
				<StyledHeading>
					{auth
						? `Hello ${auth.displayName?.split(' ')[0]}`
						: `Hello stranger 🥺`}
				</StyledHeading>
				<div>
					<p>Start planning </p>
					<CTA auth={auth} historyPush={history.push} />
				</div>
				<Earth />
			</Wrapper>
		</>
	);
};
