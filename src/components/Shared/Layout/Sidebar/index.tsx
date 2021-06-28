import React from 'react';

import styled from 'styled-components';
import SettingsIcon from '@material-ui/icons/Settings';
import { LogInButton } from './LogInButton';

const Wrapper = styled.nav`
	grid-column: 3/4;
	grid-row: 1/3;

	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	gap: 1rem;

	margin: 25px;
`;

const Sidebar: React.FC = () => {
	return (
		<Wrapper>
			<LogInButton />
			<SettingsIcon style={{ fontSize: '49px' }} />
		</Wrapper>
	);
};

export default Sidebar;
