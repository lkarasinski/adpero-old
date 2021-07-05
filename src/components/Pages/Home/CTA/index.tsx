import React from 'react';
import firebase from '@firebase';
import { handleLoginLogout } from '@functions/handleLoginLogout';

import { Button, Container, Heading } from './CTA.style';

interface Props {
	auth: firebase.User | null | undefined;
	historyPush: (x: string) => void;
}

export const CTA: React.FC<Props> = ({ auth, historyPush }) => {
	const content = auth ? 'Go to journeys' : 'Log in';
	const onClick = auth
		? () => historyPush('/journeys')
		: () => handleLoginLogout(auth);

	return (
		<Container>
			<Heading>Start planning:</Heading>
			<Button onClick={onClick}>{content}</Button>
		</Container>
	);
};
