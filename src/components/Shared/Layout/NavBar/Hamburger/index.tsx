import React, { useState } from 'react';
import { breakpoints } from '@constants/breakpoints';
import { Container, HamburgerButton } from './hamburger.style';

export const Hamburger: React.FC = () => {
	const [isActive, setIsActive] = useState(false);
	if (breakpoints.values.large) {
		return (
			<Container>
				<HamburgerButton
					onClick={() => setIsActive(!isActive)}
				></HamburgerButton>
			</Container>
		);
	} else {
		return null;
	}
};
