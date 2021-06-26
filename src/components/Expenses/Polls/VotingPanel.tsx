import React from 'react';
import { Field, Form, Formik } from 'formik';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDocument } from 'react-firebase-hooks/firestore';
import { Vote } from 'utilities/interfaces/Votes';

interface Props {
	id: number;
	docRef: firebase.firestore.DocumentReference<
		firebase.firestore.DocumentData
	>;
}

export const VotingPanel: React.FC<Props> = ({ id, docRef }) => {
	const [auth] = useAuthState(firebase.auth());
	const [documentData] = useDocument(docRef);
	return (
		<div>
			<Formik
				initialValues={{ value: '4', email: auth?.email, id: id }}
				onSubmit={(values) => {
					const votesArray = documentData
						?.data()
						?.votes.filter(
							(vote: Vote) =>
								!(vote.id === id && vote.email === auth?.email)
						);

					const copy = { ...documentData?.data() };
					votesArray.push(values);
					copy.votes = votesArray;
					docRef.update(copy);
				}}
			>
				<Form>
					<Field name="value" as="select">
						<option value="1">Not taking part if this wins</option>
						<option value="2">Very bad</option>
						<option value="3">Bad</option>
						<option value="4">Ok</option>
						<option value="5">Good</option>
						<option value="6">Very good</option>
						<option value="7">Taking part only if this wins</option>
					</Field>
					<button type="submit">ok</button>
				</Form>
			</Formik>
		</div>
	);
};
