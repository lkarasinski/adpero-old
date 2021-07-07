import React, { useState } from 'react';
import { breakpoints } from '@constants/breakpoints';
import { Container, HamburgerButton } from './hamburger.style';

export const Hamburger: React.FC = () => {
	const [isActive, setIsActive] = useState(true);
	if (breakpoints.values.large) {
		return (
			<Container
				onClick={() => {
					setIsActive(!isActive);
				}}
			>
				<HamburgerButton isActive={isActive}></HamburgerButton>
			</Container>
		);
	} else {
		return null;
	}
};
