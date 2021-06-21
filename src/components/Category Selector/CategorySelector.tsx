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
	display: grid;
`;

interface Props {
	currentCategory: string;
	setCurrentCategory: Function;
}

const CategorySelector: React.FC<Props> = ({
	currentCategory,
	setCurrentCategory,
}) => {
	const [isHovered, setIsHovered] = useState(false);

	console.log(currentCategory);
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
				<ListElement
					isHovered={isHovered}
					emoji={<div>:)</div>}
					content="Entertainment"
					setCurrentCategory={() =>
						setCurrentCategory('entertainment')
					}
				/>
				<ListElement
					isHovered={isHovered}
					emoji={<div>:] </div>}
					content="Public Transport"
					setCurrentCategory={() =>
						setCurrentCategory('publicTransport')
					}
				/>
			</StyledList>
		</Wrapper>
	);
};

export default CategorySelector;
