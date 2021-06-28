import firebase from 'firebase';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components';

const Wrapper = styled.div`
	grid-row: 2/3;
	grid-column: 2/3;
`;

const StyledHeading = styled.h1`
	font-size: 2em;
	text-align: center;
`;

/**
 * Home page with a greeting and a button taking to journeys.
 */
export const Home: React.FC = () => {
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
			</Wrapper>
		</>
	);
};
