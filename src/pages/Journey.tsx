import React, { useContext, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import firebase from '../firebase';
import AuthContext from '../contexts/AuthProvider';
import getJourneyData from '../utilities/functions/getJourneyData';
import { SiteData } from '../utilities/interfaces/SiteState';
import Layout from '../components/Layout/Layout';
import { CreateInviteLinkPanel } from 'components/Invites/CreateInviteLinkPanel';

interface Props extends RouteComponentProps<{ id: string }> {}

const journeysRef = firebase.firestore().collection('journeys');

export const Journey: React.FC<Props> = ({ match }) => {
	const auth = useContext(AuthContext);
	const [siteData, setSiteData] = useState<SiteData>({
		siteState: {
			authenticated: false,
			docExists: false,
			hasPermission: false,
			author: false,
			success: false,
		},
	});

	const removeUserFromTheJourney = (email: string) => {
		if (siteData.siteState.author) {
			if (siteData.journey?.users.includes(email)) {
				const users = siteData.journey?.users.filter(
					(item: any) => item !== email
				);
				journeysRef
					.doc(match.params.id)
					.update({ users: [...users] })
					.catch((err) => {
						console.error(err);
					});
			}
		}
	};

	useEffect(() => {
		getJourneyData({
			auth: auth,
			journeysRef: journeysRef,
			id: match.url.split('/')[2],
			siteData: siteData,
			setSiteData: setSiteData,
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [auth, match.url]);

	return (
		<Layout>
			siema {auth?.user?.displayName?.split(' ')[0]}
			<div>
				<pre>{JSON.stringify(siteData, null, 2)}</pre>
			</div>
			<ul>
				{siteData.journey?.users.map((user: string) => (
					<div key={user}>
						<li>
							{user}
							{siteData.siteState.author ? (
								<button
									onClick={() =>
										removeUserFromTheJourney(user)
									}
								>
									remove user
								</button>
							) : null}
						</li>
					</div>
				))}
			</ul>
			{siteData.siteState.author ? <CreateInviteLinkPanel /> : null}
		</Layout>
	);
};
