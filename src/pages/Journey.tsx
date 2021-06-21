import React, { useEffect, useState } from 'react';
// import React, { useContext, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import firebase from '../firebase';
// import AuthContext from '../contexts/AuthProvider';
import getSiteState from '../utilities/functions/getSiteState';
import { SiteData } from '../utilities/interfaces/SiteState';
import { useDocument } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

import { InviteLinkPanel } from 'components/Invites/InviteLinkPanel';
import { UserList } from 'components/UserList/UserList';
import { JourneyErrors } from 'components/Errors/JourneyErrors';

interface Props extends RouteComponentProps<{ id: string }> {}

const journeysRef = firebase.firestore().collection('journeys');

export const Journey: React.FC<Props> = ({ match }) => {
	// const auth = useContext(AuthContext);
	const [auth] = useAuthState(firebase.auth());
	const [siteData, setSiteData] = useState<SiteData>({
		siteState: {
			authenticated: false,
			docExists: false,
			hasPermission: false,
			author: false,
			success: false,
		},
	});

	const [firestoreData, loading, error] = useDocument(
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
		if (firestoreData) {
			const x = siteData;
			x.journey = firestoreData.data();
			setSiteData({ ...x });
		}
		if (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getSiteState({
			auth: auth,
			journeysRef: journeysRef,
			id: match.url.split('/')[2],
			siteData: siteData,
			setSiteData: setSiteData,
		});
		updateSiteInfo();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [match.url, firestoreData, auth]);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	if (!siteData.siteState.success || !siteData.journey || !auth) {
		return <JourneyErrors siteState={siteData.siteState} userAuth={auth} />;
	}

	return (
		<>
			<h1>{siteData?.journey?.name}</h1>
			<UserList
				siteData={siteData}
				remove={removeUserFromTheJourney}
				manage={manageEditorPermissions}
			/>
			<br />
			{siteData.siteState.author ? <InviteLinkPanel /> : null}
			<div>
				<pre>{JSON.stringify(siteData, null, 2)}</pre>
			</div>
		</>
	);
};
