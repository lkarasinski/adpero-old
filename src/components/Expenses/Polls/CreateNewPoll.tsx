import * as React from 'react';
import firebase from './../../../firebase';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { SmallButton } from 'components/Buttons/SmallButton';

interface Props {
	id: string;
}

interface IValues {
	title: string;
}

const pollsRef = firebase.firestore().collection('polls');

const validationSchema = yup.object({
	title: yup.string().required().max(24).min(2),
});

export const CreateNewPoll: React.FC<Props> = ({ id }) => {
	const initialValues = { title: '', id: id, votes: [] };
	const createNewPoll = (values: IValues): void => {
		pollsRef.add(values);
	};

	return (
		<>
			<Formik
				initialValues={initialValues}
				onSubmit={(values) => createNewPoll(values)}
				validationSchema={validationSchema}
			>
				<Form>
					<Field name="title" placeholder="Poll title" />
					<SmallButton type="submit">Create new poll</SmallButton>
				</Form>
			</Formik>
		</>
	);
};
