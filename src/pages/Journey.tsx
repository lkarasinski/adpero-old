import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import firebase from '../firebase';
import getSiteState from '../utilities/functions/getSiteState';
import { SiteData } from '../utilities/interfaces/SiteState';
import { useDocument } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

import { InviteLinkPanel } from 'components/Invites/InviteLinkPanel';
import { UserList } from 'components/UserList/UserList';
import { JourneyErrors } from 'components/Errors/JourneyErrors';
import { Expenses } from 'components/Expenses/Display';

import { DeleteJourney } from 'components/DeleteJourney';

const journeysRef = firebase.firestore().collection('journeys');

export const Journey: React.FC<RouteComponentProps<{ id: string }>> = ({
	match,
}) => {
	const [auth] = useAuthState(firebase.auth());
	const [siteData, setSiteData] = useState<SiteData>({
		siteState: {
			authenticated: false,
			docExists: false,
			hasPermission: false,
			author: false,
			success: false,
			editor: false,
		},
	});

	const [firestoreData, loading, error] = useDocument(
		journeysRef.doc(match.params.id)
	);

	const removeUserFromTheJourney = (email: string) => {
		if (siteData.siteState.author) {
			if (siteData.journey?.users.includes(email)) {
				const users = siteData.journey?.users.filter(
					(item: string) => item !== email
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
					(item: string) => item !== email
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
	}, [match.url, firestoreData, auth]);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	if (!siteData.siteState.success || !siteData.journey || !auth) {
		return <JourneyErrors siteState={siteData.siteState} userAuth={auth} />;
	}

	const author = siteData.siteState.author;
	const editor = siteData.siteState.author || siteData.siteState.editor;

	return (
		<>
			<h1>{siteData?.journey?.name}</h1>
			<UserList
				siteData={siteData}
				remove={removeUserFromTheJourney}
				manage={manageEditorPermissions}
			/>
			<br />

			<Expenses
				journeyData={siteData.journey}
				id={match.params.id}
				editor={editor}
			/>
			{author ? <InviteLinkPanel /> : null}
			{author ? <DeleteJourney id={match.params.id} /> : null}
		</>
	);
};
