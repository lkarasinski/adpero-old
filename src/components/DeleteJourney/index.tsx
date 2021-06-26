import { SmallButton } from 'components/Buttons/SmallButton';
import React from 'react';
import { Link } from 'react-router-dom';
import { deleteJourney } from '../../utilities/functions/deleteJourney';

interface Props {
	id: string;
}

export const DeleteJourney: React.FC<Props> = ({ id }) => {
	return (
		<>
			<Link to="/journeys" onClick={() => deleteJourney(id)}>
				<SmallButton>Delete this journey</SmallButton>
			</Link>
		</>
	);
};
