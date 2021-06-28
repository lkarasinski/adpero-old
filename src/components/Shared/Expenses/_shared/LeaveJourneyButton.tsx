import { leaveJourney } from '../../../../functions/leaveJourney';
import firebase from 'firebase';
import { ConfirmButton } from 'components/Shared/Buttons/ConfirmButton';
import { withRouter } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

/**
 * withRouter component rendering a confirm button that removes email of the currently logged in user from journey.users array of id found in the link
 */
export const LeaveJourneyButton = withRouter(({ history, match }) => {
	const [auth, loading] = useAuthState(firebase.auth());
	const pushTohistory = (x: string): void => {
		history.push(x);
	};

	if (loading) {
		return null;
		// SKELETON
	}

	return (
		<ConfirmButton
			onSuccess={() => leaveJourney(match.params.id, auth)}
			text={'Leave Journey'}
			push={() => pushTohistory('/journeys/')}
		/>
	);
});
