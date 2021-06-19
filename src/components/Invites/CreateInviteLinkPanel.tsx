import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import firebase from './../../firebase';
import { SmallButton } from 'components/Buttons/SmallButton';
import AuthContext from '../../contexts/AuthProvider';
import { Link, withRouter } from 'react-router-dom';

const invitesRef = firebase.firestore().collection('invites');
const journeysRef = firebase.firestore().collection('journeys');

const Wrapper = styled.div``;

const createInviteLink = async (auth: any, id: string, update: Function) => {
	let inviteID: any = null;
	if (auth.authenticated && auth.user) {
		const userEmail = auth.user.email;
		return journeysRef
			.doc(id)
			.get()
			.then((doc) => {
				if (doc.exists) {
					const data = doc.data();
					if (data?.author === userEmail) {
						invitesRef
							.where('journeyID', '==', id)
							.get()
							.then((doc) => {
								doc.forEach((doc) => doc.ref.delete());

								inviteID = invitesRef
									.add({
										createdAt: firebase.firestore.FieldValue.serverTimestamp(),
										journeyID: id,
									})
									.then((docRef) => {
										update(docRef.id);
									});
							});
					}
				}
			});
	}
};

export const CreateInviteLinkPanel = withRouter(({ match }) => {
	const [linkID, setLinkID] = useState('');
	const auth = useContext(AuthContext);
	const journeyID = match.url.split('/')[2];

	useEffect(() => {
		invitesRef
			.where('journeyID', '==', journeyID)
			.get()
			.then((snapshot) => {
				snapshot.forEach((doc) => {
					setLinkID(doc.id);
				});
			});
	}, []);

	return (
		<Wrapper>
			<SmallButton
				type="submit"
				onClick={() => createInviteLink(auth, journeyID, setLinkID)}
			>
				Create link
			</SmallButton>
			<br />
			<br />
			<code>{`localhost:3000/join/${linkID}`}</code>
			<br />
			<br />
			<Link to={`/join/${linkID}`}>Invite</Link>
		</Wrapper>
	);
});
