import React from 'react';
import styled from 'styled-components';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';

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
			<AccountCircleIcon style={{ fontSize: '49px' }} />
			<SettingsIcon style={{ fontSize: '49px' }} />
		</Wrapper>
	);
};

export default Sidebar;
