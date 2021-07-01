import { Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { handleNewJourney } from 'functions/handleNewJourney';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Heading, Span, Button, Wrapper, Input } from './styledComponents';

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
					<Wrapper>
						<Heading>
							Create new <Span>journey</Span>
						</Heading>
						<Input erorrs={errors} name={'name'} label="name" />
						<Button type="submit">
							<svg
								width="13"
								height="22"
								viewBox="0 0 13 22"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0 19.0325L7.85785 11L0 2.9675L2.41912 0.5L12.7132 11L2.41912 21.5L0 19.0325Z"
									fill="white"
								/>
							</svg>
						</Button>
					</Wrapper>
				</Form>
			)}
		</Formik>
	);
};
