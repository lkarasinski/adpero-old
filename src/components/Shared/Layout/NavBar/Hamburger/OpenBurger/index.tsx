import React, { useState } from 'react';
import { breakpoints } from '@constants/breakpoints';
import { Container, List, ListItem } from './openburger.style';
import { LogInButton } from '../../LogInButton';

interface Props {
	isActive: boolean;
	setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const OpenBurger: React.FC<Props> = ({ isActive, setIsActive }) => {
	const [width, setWidth] = useState(window.innerWidth);
	window.addEventListener('resize', () => setWidth(width));
	if (isActive && width <= breakpoints.values.medium) {
		return (
			<Container>
				<List>
					<ListItem
						to={'/home'}
						onClick={() => setIsActive(!isActive)}
					>
						Home
					</ListItem>
					<ListItem
						to={'/journeys'}
						onClick={() => setIsActive(!isActive)}
					>
						Journeys
					</ListItem>
					<ListItem
						to={'/about'}
						onClick={() => setIsActive(!isActive)}
					>
						About
					</ListItem>
					<LogInButton
						horizontal={false}
						func={() => setIsActive(!isActive)}
					/>
				</List>
			</Container>
		);
	}
	return null;
};
