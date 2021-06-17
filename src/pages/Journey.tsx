import React, { useContext, useEffect, useState } from 'react';
import Layout from 'components/Layout/Layout';
import { RouteComponentProps } from 'react-router-dom';
import firebase from '../firebase';
import AuthContext from '../contexts/AuthProvider';

interface Props extends RouteComponentProps<{ id: string }> {}

export const Journey: React.FC<Props> = ({ match }) => {
	const [content, setContent] = useState('');
	const auth = useContext(AuthContext);
	const journeysRef = firebase.firestore().collection('journeys');

	useEffect(() => {
		if (auth.authenticated === true) {
			journeysRef
				.doc(match.params.id)
				.get()
				.then((doc) => {
					if (doc.exists) {
						setContent(doc?.data()?.name);
					} else {
						setContent('Journey not found 🥺');
					}
				});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [auth]);
	return (
		<>
			<Layout>
				<div></div>
				<h3>Journeys</h3>
				<pre>CONTENT: {JSON.stringify(content)}</pre>
			</Layout>
		</>
	);
};
