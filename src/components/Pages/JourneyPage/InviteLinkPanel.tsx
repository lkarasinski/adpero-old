import * as React from 'react';
import styled from 'styled-components';
import firebase, { authType } from '@firebase';
import { SmallButton } from '@components/Shared/Buttons/SmallButton';
import { withRouter } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useAuthState } from 'react-firebase-hooks/auth';

const invitesRef = firebase.firestore().collection('invites');
const journeysRef = firebase.firestore().collection('journeys');

const Wrapper = styled.div``;

const createInviteLink = async (
	auth: authType,
	id: string,
	update: React.Dispatch<React.SetStateAction<string>>
) => {
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
										createdAt:
											firebase.firestore.FieldValue.serverTimestamp(),
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

/**
 * withRouter component that takes in the journey id from the link and creates a invite link
 */
export const InviteLinkPanel = withRouter(({ match }) => {
	const [linkID, setLinkID] = React.useState('');
	const [auth] = useAuthState(firebase.auth());
	const journeyID = match.url.split('/')[2];

	React.useEffect(() => {
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
				{linkID ? 'Generate new invite link' : 'Create invite link'}
			</SmallButton>
			{linkID ? (
				<CopyToClipboard
					text={`http://adpero.netlify.app/join/${linkID}`}
				>
					<div
						style={{
							backgroundColor: 'aquamarine',
							padding: '1em',
							margin: '1em',
							cursor: 'pointer',
						}}
					>
						<div>{`http://adpero.netlify.app/join/${linkID}`}</div>
						<p>Click to copy!</p>
					</div>
				</CopyToClipboard>
			) : null}
		</Wrapper>
	);
});
