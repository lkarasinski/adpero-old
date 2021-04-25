import React, { useState } from 'react';
import styled from 'styled-components';

import ListElement from './ListElement';

import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import HomeIcon from '@material-ui/icons/Home';

const Wrapper = styled.div`
	grid-column: 1/2;
	grid-row: 2/3;
`;

const StyledList = styled.ul`
	margin-left: 40px;
	gap: 1rem;
	display: flex;
	flex-direction: column;
`;

const CategorySelector = ({
	currentCategory,
	setCurrentCategory,
}: {
	currentCategory: string;
	setCurrentCategory: Function;
}) => {
	const [isHovered, setIsHovered] = useState(false);

	//TODO: Get category last worked on from firebase

	return (
		<Wrapper>
			<StyledList
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<ListElement
					isHovered={isHovered}
					emoji={
						<FlightTakeoffIcon
							style={{ fontSize: '1.5em', color: '#ffffff' }}
						/>
					}
					content="Transport"
					setCurrentCategory={() => setCurrentCategory('transport')}
				/>
				<ListElement
					isHovered={isHovered}
					emoji={
						<HomeIcon
							style={{ fontSize: '1.5em', color: '#ffffff' }}
						/>
					}
					content="Accommodation"
					setCurrentCategory={() =>
						setCurrentCategory('accommodation')
					}
				/>
			</StyledList>
		</Wrapper>
	);
};

export default CategorySelector;
