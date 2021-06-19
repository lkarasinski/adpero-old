import { Field } from 'formik';
import React from 'react';
import styled from 'styled-components';

interface Props {
	handleSubmit: () => void;
}

const Wrapper = styled.form``;

const NewJourneyButton = styled.button`
	border: 0.4rem solid #98cf30;
	border-radius: 1rem;
	padding: 1rem;
	background-color: transparent;
	cursor: pointer;
`;

export const NewJourneyForm: React.FC<Props> = ({ handleSubmit }) => {
	return (
		<Wrapper onSubmit={handleSubmit}>
			<div>
				<Field
					type="text"
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
