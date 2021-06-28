import React from 'react';

import JourneyList from './Journey List/JourneyList';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {
	id: string;
}

export const JourneysList: React.FC<Props> = () => {
	return (
		<>
			<JourneyList />
		</>
	);
};
