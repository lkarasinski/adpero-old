import React, { useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import firebase from '../../../firebase';
import { getSiteState } from '../../../functions/getSiteState';
import { SiteData } from '../../../interfaces/SiteState';
import { useDocument } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

import { InviteLinkPanel } from 'components/Pages/JourneyPage/InviteLinkPanel';
import { UserList } from './UserList';
import { JourneyErrors } from 'components/Pages/JourneyPage/JourneyErrors';
import { Expenses } from 'components/Shared/Expenses';

import { DeleteJourney } from 'components/Pages/JourneyPage/DeleteJourneyButton';

import { SmallButton } from 'components/Shared/Buttons/SmallButton';

const journeysRef = firebase.firestore().collection('journeys');

/**
 * Page of journey. Takes id from the link and renders details of the journey.
 */
export const JourneyPage: React.FC<RouteComponentProps<{ id: string }>> = ({
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

			<Expenses id={match.params.id} editor={editor} />
			{author ? <InviteLinkPanel /> : null}
			{author ? <DeleteJourney /> : null}
			<Link to={`/journeys/${match.params.id}/polls`}>
				<SmallButton>Go to polls</SmallButton>
			</Link>
		</>
	);
};