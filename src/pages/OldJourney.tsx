import React, { useContext, useEffect, useState } from 'react';
import Layout from 'components/Layout/Layout';
import { RouteComponentProps } from 'react-router-dom';
import firebase from '../firebase';
import AuthContext from '../contexts/AuthProvider';

import styled from 'styled-components';
import { ErrorMessage } from 'components/Text decoration/ErrorMessage';
import { CreateInviteLinkPanel } from 'components/Invites/CreateInviteLinkPanel';

interface Props extends RouteComponentProps<{ id: string }> {}

interface ISiteState {
	authenticated: boolean;
	docExists: boolean;
	hasPermission: boolean;
	success: boolean;
	errorMessage?: string | null;
}

const Wrapper = styled.div`
	/* grid-row: 2/3;
	grid-column: 2/3; */
`;

export const Journey: React.FC<Props> = ({ match }) => {
	const [
		content,
		setContent,
	] = useState<firebase.firestore.DocumentData | null>();
	const auth = useContext(AuthContext);
	const [isAuthor, setIsAuthor] = useState(false);
	const [journeyData, setJourneyData] = useState<any>(null);
	const [siteState, setSiteState] = useState<ISiteState>({
		authenticated: false,
		docExists: false,
		hasPermission: false,
		success: false,
		errorMessage: null,
	});

	const journeysRef = firebase.firestore().collection('journeys');

	const getJourneyData = () => {
		let exists: any = null;
		journeysRef
			.doc(match.url.split('/')[2])
			.get()
			.then((doc: any) => {
				console.log(`doc exists : ${doc.exists}`);
				if (doc.exists) {
					console.log('asd');
					const data = doc.data();
					setJourneyData(data);
					exists = true;
				} else {
					exists = false;
				}
			});
		console.log(`exists`);
		console.log(exists);
		if (exists === true || exists === false) {
			return exists;
		}
	};

	const isTheUserTheAuthor = () => {
		const userEmail = auth?.user?.email;
		if (journeyData) {
			if (journeyData.author === userEmail) {
				setIsAuthor(true);
			}
		}
	};

	const checkForErrors = () => {
		const siteInfo = {
			authenticated: false,
			docExists: false,
			hasPermission: false,
			success: false,
			errorMessage: '',
		};
		if (auth.authenticated) {
			siteInfo.authenticated = true;
			console.log(journeyData);
			if (journeyData) {
				siteInfo.docExists = true;
				if (journeyData.users.includes(auth.user?.email)) {
					siteInfo.hasPermission = true;
					siteInfo.errorMessage = '';
					siteInfo.success = true;
				} else {
					siteInfo.hasPermission = true;
					siteInfo.errorMessage = `You don't have permission to access this page.`;
				}
			} else {
				siteInfo.docExists = false;
				siteInfo.errorMessage = `This journey does not exist. Make sure you have the correct link!`;
			}
		} else {
			siteInfo.authenticated = false;
			siteInfo.errorMessage = `You need to be logged in to access this page`;
		}
		return siteInfo;
	};

	useEffect(() => {
		getJourneyData();
		isTheUserTheAuthor();
		setSiteState(checkForErrors());
	}, [auth]);

	const removeUserFromTheJourney = (email: string) => {
		if (isAuthor) {
			if (journeyData.users.includes(email)) {
				const users = journeyData.users.filter(
					(item: any) => item !== email
				);
				journeysRef.doc(match.params.id).update({ users: [...users] });
			}
		}
	};

	if (!journeyData || !siteState.success) {
		return (
			<>
				<Layout>
					<ErrorMessage>
						{siteState.errorMessage
							? `${siteState.errorMessage} 🥺`
							: ``}
					</ErrorMessage>
				</Layout>
			</>
		);
	}

	return (
		<>
			<Layout>
				<Wrapper>
					<h2>{journeyData.name}</h2>
					<br />
					<h4>Users with access:</h4>
					<br />
					<ul>
						{journeyData.users.map((user: string) => (
							<>
								<li>
									{user}
									<button
										onClick={() =>
											removeUserFromTheJourney(user)
										}
									>
										remove user
									</button>
								</li>
							</>
						))}
					</ul>
					<br />
					<br />
					<br />
					{isAuthor ? <CreateInviteLinkPanel /> : null}
					<pre>{JSON.stringify(journeyData, null, 2)}</pre>
				</Wrapper>
			</Layout>
		</>
	);
};
