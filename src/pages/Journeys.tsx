import React from 'react';

import JourneyList from '../components/Journey List/JourneyList';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {
	id: string;
}

export const Journeys: React.FC<Props> = () => {
	return (
		<>
			<JourneyList />
		</>
	);
};
