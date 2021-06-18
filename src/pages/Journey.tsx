import React, { useContext, useEffect, useState } from 'react';
import Layout from 'components/Layout/Layout';
import { RouteComponentProps } from 'react-router-dom';
import firebase from '../firebase';
import AuthContext from '../contexts/AuthProvider';

import styled from 'styled-components';
import { ErrorMessage } from 'components/Text decoration/ErrorMessage';

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
	const [siteState, setSiteState] = useState<ISiteState>({
		authenticated: false,
		docExists: false,
		hasPermission: false,
		success: false,
		errorMessage: null,
	});
	const auth = useContext(AuthContext);
	const journeysRef = firebase.firestore().collection('journeys');

	useEffect(() => {
		let authenticated: boolean = false;
		let docExists: boolean = false;
		let hasPermission: boolean = false;
		let success: boolean = false;
		let errorMessage: string | null = null;

		if (auth.authenticated === true) {
			authenticated = true;
			journeysRef
				.doc(match.params.id)
				.get()
				.then((doc) => {
					if (doc.exists) {
						docExists = true;
						const data = doc?.data();
						if (data) {
							if (data.users.includes(auth.user?.email)) {
								setContent(doc?.data());
								hasPermission = true;
								errorMessage = null;
								success = true;
							} else {
								hasPermission = false;
								errorMessage =
									"You don't have permission to access this page.";
							}
						}
					} else {
						errorMessage =
							'This journey does not exist. Make sure you have the correct link!';
						docExists = false;
						setContent(null);
					}
				})
				// Does not update correctly when setting the state at the end without .then
				.then(() => {
					setSiteState({
						authenticated: authenticated,
						docExists: docExists,
						hasPermission: hasPermission,
						errorMessage: errorMessage,
						success: success,
					});
				});
		} else {
			setContent(null);
			setSiteState({ ...siteState, errorMessage: errorMessage });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [auth]);

	if (!siteState.authenticated || !content) {
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
					<h2>{content.name}</h2>
					<br />
					<h4>Users with access:</h4>
					<ul>
						{content.users.map((user: string) => (
							<li>{user}</li>
						))}
					</ul>
					<div></div>
					<br />
					<br />
					<br />
					<pre>{JSON.stringify(content, null, 2)}</pre>
				</Wrapper>
			</Layout>
		</>
	);
};
