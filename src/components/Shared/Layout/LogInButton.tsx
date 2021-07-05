import firebase from '@firebase';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components';
import { handleLoginLogout } from '@functions/handleLoginLogout';

const Button = styled.button`
	height: 3rem;
	width: 5rem;
	background-color: transparent;
	border: 0.15rem solid black;
	border-radius: 1rem;
	cursor: pointer;
`;

export const LogInButton: React.FC = () => {
	const [auth] = useAuthState(firebase.auth());

	return (
		<Button onClick={() => handleLoginLogout(auth)}>
			{auth ? 'Log out' : 'Log in'}
		</Button>
	);
};
