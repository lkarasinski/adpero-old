import React from 'react';
import { leaveJourney } from '../../../../functions/leaveJourney';
import firebase from 'firebase';
import { ConfirmButton } from 'components/Shared/Buttons/ConfirmButton';
import { withRouter } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

export const LeaveJourneyButton = withRouter(({ history, match }) => {
	const [auth] = useAuthState(firebase.auth());
	const pushTohistory = (x: string): void => {
		history.push(x);
	};
	return (
		<React.Fragment>
			<ConfirmButton
				onSuccess={() => leaveJourney(match.params.id, auth)}
				text={'Leave Journey'}
				size={'medium'}
				push={() => pushTohistory('/journeys/')}
			/>
		</React.Fragment>
	);
});
