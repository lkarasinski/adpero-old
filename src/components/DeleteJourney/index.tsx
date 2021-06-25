import React from 'react';
import { deleteJourney } from '../../utilities/functions/deleteJourney';

interface Props {
	id: string;
}

export const DeleteJourney: React.FC<Props> = ({ id }) => {
	return (
		<>
			<button onClick={() => deleteJourney(id)}>
				Delete this journey
			</button>
		</>
	);
};
