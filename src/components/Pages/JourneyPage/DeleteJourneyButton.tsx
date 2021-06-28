import { ConfirmButton } from 'components/Shared/Buttons/ConfirmButton';
import { withRouter } from 'react-router-dom';
import { deleteJourney } from '../../../functions/deleteJourney';

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
