import * as React from 'react';
import firebase from './../../../firebase';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { SmallButton } from 'components/Buttons/SmallButton';
import { InputField } from '../Edit/ExpenseForm/InputField';

interface Props {
	id: string;
}

interface IValues {
	title: string;
}

const pollsRef = firebase.firestore().collection('polls');

const validationSchema = yup.object({
	title: yup
		.string()
		.required('Title is required')
		.max(24, 'Title must be at most 24 characters')
		.min(2, 'Title must be at least 2 characters'),
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
				{({ errors }) => {
					return (
						<Form>
							<InputField
								name="title"
								placeholder="Poll title"
								error={errors}
							/>
							<SmallButton type="submit">
								Create new poll
							</SmallButton>
						</Form>
					);
				}}
			</Formik>
		</>
	);
};
