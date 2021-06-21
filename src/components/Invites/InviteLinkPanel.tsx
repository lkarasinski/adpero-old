import { useEffect, useState } from 'react';
import styled from 'styled-components';
import firebase from '../../firebase';
import { SmallButton } from 'components/Buttons/SmallButton';
import { withRouter } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useAuthState } from 'react-firebase-hooks/auth';

const invitesRef = firebase.firestore().collection('invites');
const journeysRef = firebase.firestore().collection('journeys');

const Wrapper = styled.div``;

const createInviteLink = async (auth: any, id: string, update: Function) => {
	if (auth) {
		const userEmail = auth.email;
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

								invitesRef
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

export const InviteLinkPanel = withRouter(({ match }) => {
	const [linkID, setLinkID] = useState('');
	const [auth] = useAuthState(firebase.auth());
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Wrapper>
			<SmallButton
				type="submit"
				onClick={() => createInviteLink(auth, journeyID, setLinkID)}
			>
				Create link
			</SmallButton>
			<CopyToClipboard text={`localhost:3000/join/${linkID}`}>
				<div
					style={{
						backgroundColor: 'aquamarine',
						padding: '1em',
						margin: '1em',
						cursor: 'pointer',
					}}
				>
					<div>{`localhost:3000/join/${linkID}`}</div>
					<p>Click to copy!</p>
				</div>
			</CopyToClipboard>
		</Wrapper>
	);
});
