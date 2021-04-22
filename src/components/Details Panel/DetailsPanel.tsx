import React from 'react';
import styled from 'styled-components';

import categories from '../../constants/categories';

const Wrapper = styled.main`
	grid-row: 2/3;
	grid-column: 2/3;
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
			<h3>{currentCategory}</h3>
			{arr.map((x, id) => (
				<p key={id}>{x}</p>
			))}
		</Wrapper>
	);
};

export default DetailsPanel;
