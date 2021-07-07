import firebase from '@firebase';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { handleLoginLogout } from '@utils/functions/handleLoginLogout';
import { Button } from './loginbutton.style';

interface Props {
	horizontal?: boolean;
	func?: () => void;
}

export const LogInButton: React.FC<Props> = ({ horizontal, func }) => {
	const [auth] = useAuthState(firebase.auth());

	return (
		<Button
			onClick={() => {
				handleLoginLogout(auth);
				if (func) {
					func();
				}
			}}
			horizontal={horizontal}
		>
			{auth ? 'Log out' : 'Log in'}
		</Button>
	);
};
