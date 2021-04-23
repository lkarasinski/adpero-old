import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import MediumButton from '../Buttons/MediumButton';

import categories from '../../constants/categories';

const Wrapper = styled.main`
	grid-row: 2/3;
	grid-column: 2/3;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StyledInput = styled.input`
	background-color: #f3f3f3;
	border: none;
	border-radius: 20px;
	padding: 15px;
	margin: 10px;
	width: 300px;

	font-size: 1em;

	&::placeholder {
		color: #626262;
		font-weight: bold;
	}
`;

const CategoryHeading = styled.h1`
	font-size: 3em;
	margin-bottom: 3rem;
	position: relative;

	::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 10px;
		background-color: #6730cf;
		bottom: -15px;
		left: 0;
	}
`;

const InputGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`;

const DetailsPanel = ({ currentCategory }: { currentCategory: string }) => {
	let arr = [''];
	if (currentCategory === 'transport') {
		arr = categories.transport;
	} else if (currentCategory === 'accommodation') {
		arr = categories.accommodation;
	}

	return (
		<Wrapper>
			<CategoryHeading>{_.startCase(currentCategory)}</CategoryHeading>
			<StyledForm>
				<InputGrid>
					{arr.map((x, id) => (
						<StyledInput
							type="text"
							key={id}
							placeholder={_.startCase(x)}
						></StyledInput>
					))}
				</InputGrid>
				<MediumButton>Confirm</MediumButton>
			</StyledForm>
		</Wrapper>
	);
};

export default DetailsPanel;
