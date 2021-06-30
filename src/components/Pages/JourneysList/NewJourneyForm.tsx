import { InputField } from 'components/Shared/Expenses/ExpenseForm/InputField';
import { Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { handleNewJourney } from 'functions/handleNewJourney';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

interface Props {
	historyPush: (x: string) => void;
}

const validationSchema = yup.object({
	name: yup
		.string()
		.required('Name is required')
		.min(3, 'Name must be at least 3 characters')
		.max(24, 'Name must be at most 24 characters'),
	users: yup.array(),
});

/**
 * Formik component with a input field allowing to create a new journey.
 * @param historyPush - function linking to created journey
 */
export const NewJourneyForm: React.FC<Props> = ({ historyPush }) => {
	const [auth, loading] = useAuthState(firebase.auth());

	if (loading) {
		return null;
		// LOADING
	}

	return (
		<Formik
			initialValues={{
				name: '',
				users: [],
			}}
			onSubmit={async (values) => {
				const name = values.name;
				handleNewJourney({ name, historyPush, auth });
			}}
			validationSchema={validationSchema}
		>
			{({ errors }) => (
				<Form>
					<div>
						<InputField
							erorrs={errors}
							name={'name'}
							placeholder={'Where are you going?'}
						/>
					</div>
					<button type="submit">Create new journey</button>
				</Form>
			)}
		</Formik>
	);
};
