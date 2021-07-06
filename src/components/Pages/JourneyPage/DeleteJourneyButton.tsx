import { ConfirmButton } from '@components/Shared/Buttons/ConfirmButton';
import { withRouter } from 'react-router-dom';
import { deleteJourney } from '@utils/functions/deleteJourney';

/**
 * ConfirmButton with history.push('/journeys/')
 */
export const DeleteJourney = withRouter(({ match, history }) => {
	return (
		<>
			<ConfirmButton
				onSuccess={() => deleteJourney(match.params.id)}
				text={'Delete this journey'}
				push={() => history.push('/journeys/')}
			/>
		</>
	);
});
