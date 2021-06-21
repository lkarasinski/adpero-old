import React, { useContext, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import firebase from '../firebase';
import AuthContext from '../contexts/AuthProvider';
import getSiteState from '../utilities/functions/getSiteState';
import { SiteData } from '../utilities/interfaces/SiteState';
import { useDocument } from 'react-firebase-hooks/firestore';

import { InviteLinkPanel } from 'components/Invites/InviteLinkPanel';

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

	const [data, loading, error] = useDocument(
		journeysRef.doc(match.params.id)
	);

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

	const manageEditorPermissions = (email: string) => {
		if (siteData.siteState.author) {
			let editors: string[];
			if (siteData.journey?.editors.includes(email)) {
				editors = siteData.journey?.editors.filter(
					(item: any) => item !== email
				);
			} else {
				editors = siteData.journey?.editors;
				editors.push(email);
			}
			journeysRef.doc(match.params.id).update({ editors: [...editors] });
		}
	};

	const updateSiteInfo = () => {
		if (data) {
			const x = siteData;
			x.journey = data.data();
			setSiteData({ ...x });
		}
		if (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		updateSiteInfo();
		getSiteState({
			auth: auth,
			journeysRef: journeysRef,
			id: match.url.split('/')[2],
			siteData: siteData,
			setSiteData: setSiteData,
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [auth, match.url, data]);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	return (
		<>
			<h1>Hello {auth?.user?.displayName?.split(' ')[0]}</h1>
			<ul>
				<p>Users in journey: </p>
				<br />
				{siteData.journey?.users.map((user: string) => (
					<div key={user}>
						<li>
							{user}
							{siteData.siteState.author ? (
								<>
									<button
										onClick={() =>
											removeUserFromTheJourney(user)
										}
									>
										remove user
									</button>
									<button
										onClick={() =>
											manageEditorPermissions(user)
										}
									>
										give editor
									</button>
								</>
							) : null}
						</li>
					</div>
				))}
			</ul>
			<br />
			{siteData.siteState.author ? <InviteLinkPanel /> : null}
			<div>
				<pre>{JSON.stringify(siteData, null, 2)}</pre>
			</div>
		</>
	);
};
