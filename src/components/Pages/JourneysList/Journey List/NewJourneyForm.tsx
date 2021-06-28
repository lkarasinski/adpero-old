import { InputField } from 'components/Shared/Expenses/Edit/ExpenseForm/InputField';
import { FormikErrors } from 'formik';
import React from 'react';
import styled from 'styled-components';

interface Props {
	handleSubmit: () => void;
	errors: FormikErrors<{ name: string; users: string[] }>;
}

const Wrapper = styled.form``;

const NewJourneyButton = styled.button`
	border: 0.4rem solid #62fd8d;
	border-radius: 1rem;
	padding: 1rem;
	background-color: transparent;
	cursor: pointer;
	font-weight: bold;
	font-size: 1.3em;
`;

export const NewJourneyForm: React.FC<Props> = ({ handleSubmit, errors }) => {
	return (
		<Wrapper onSubmit={handleSubmit}>
			<div>
				<InputField
					erorrs={errors}
					name={'name'}
					placeholder={'Where are you going?'}
				/>
			</div>
			<NewJourneyButton type="submit">
				Create new journey
			</NewJourneyButton>
		</Wrapper>
	);
};
