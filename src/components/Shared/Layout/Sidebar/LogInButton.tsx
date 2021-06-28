import firebase from '../../../../firebase';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components';

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

	const handleAuth = () => {
		if (auth) {
			firebase.auth().signOut();
		} else {
			const provider = new firebase.auth.GoogleAuthProvider();
			firebase
				.auth()
				.signInWithPopup(provider)
				.then(() => {
					// setColor('blue');
				})
				.catch((err) => {
					const errorCode = err.code;
					const errorMessage = err.message;
					console.error(errorCode);
					console.error(errorMessage);
				});
		}
		return;
	};

	return (
		<Button onClick={() => handleAuth()}>
			{auth ? 'Log out' : 'Log in'}
		</Button>
	);
};
