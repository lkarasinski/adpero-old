import * as React from 'react';
import firebase from '@firebase';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { SmallButton } from '@components/Shared/Buttons/SmallButton';
import { InputField } from '@components/Shared/Expenses/ExpenseForm/InputField';

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

/**
 * Renders a form allowing to create a new poll
 * @param id - id of the journey you want this poll to be attached to
 */
export const CreateNewPoll: React.FC<Props> = ({ id }) => {
	const initialValues = { title: '', id: id, votes: [], expenses: [] };
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
