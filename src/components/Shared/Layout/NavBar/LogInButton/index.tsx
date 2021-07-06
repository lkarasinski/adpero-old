import firebase from '@firebase';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { handleLoginLogout } from '@utils/functions/handleLoginLogout';
import { Button } from './loginbutton.style';

export const LogInButton: React.FC = () => {
	const [auth] = useAuthState(firebase.auth());

	return (
		<Button onClick={() => handleLoginLogout(auth)}>
			{auth ? 'Log out' : 'Log in'}
		</Button>
	);
};
