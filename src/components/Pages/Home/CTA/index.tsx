import React from 'react';
import firebase from '@firebase';
import { handleLoginLogout } from '@functions/handleLoginLogout';

import { Button } from './CTA.style';

interface Props {
	auth: firebase.User | null | undefined;
	historyPush: (x: string) => void;
}

export const CTA: React.FC<Props> = ({ auth, historyPush }) => {
	console.log(historyPush);
	if (auth) {
		return (
			<Button onClick={() => historyPush('/journeys')}>
				Go to yourneys
			</Button>
		);
	}
	return <Button onClick={() => handleLoginLogout(auth)}>Log in</Button>;
};
