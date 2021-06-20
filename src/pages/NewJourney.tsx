import React, { useContext, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Layout from 'components/Layout/Layout';

import firebase from '../firebase';
import AuthContext from 'contexts/AuthProvider';

import getJourneyData from '../utilities/functions/getJourneyData';

import { SiteData } from '../utilities/interfaces/SiteState';

interface Props extends RouteComponentProps {}

const journeysRef = firebase.firestore().collection('journeys');

export const Journey: React.FC<Props> = ({ match }) => {
	const [siteData, setSiteData] = useState<SiteData>({
		siteState: {
			authenticated: false,
			docExists: false,
			hasPermission: false,
			author: false,
			success: false,
		},
	});
	const auth = useContext(AuthContext);

	useEffect(() => {
		getJourneyData({
			auth: auth,
			journeysRef: journeysRef,
			id: match.url.split('/')[2],
			siteData: siteData,
			setSiteData: setSiteData,
		});
	}, [auth]);

	return (
		<Layout>
			siema {auth?.user?.displayName?.split(' ')[0]}
			<div>
				<pre>{JSON.stringify(siteData, null, 2)}</pre>
			</div>
		</Layout>
	);
};
