import React, { useState, useContext, useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import AuthContext from '../contexts/AuthProvider';

import JourneyList from '../components/Journey List/JourneyList';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {
	id: string;
}

export const Journeys: React.FC<Props> = ({ location, match }) => {
	return (
		<>
			<Layout>
				Journeys
				<JourneyList />
			</Layout>
		</>
	);
};
