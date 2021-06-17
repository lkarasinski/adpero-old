import React from 'react';
import JourneyList from 'components/Landing Page/JourneyList';
import Layout from 'components/Layout/Layout';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<{ id: string }> {}

export const Journey: React.FC<Props> = ({ match }) => {
	return (
		<>
			<Layout>
				Journeys
				{match.params.id}
			</Layout>
		</>
	);
};
