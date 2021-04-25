import React, { useContext, useState } from 'react';

import styled from 'styled-components';
import firebase from './../../firebase';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import { AuthContext } from '../../contexts/AuthProvider';

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
	const x = useContext(AuthContext);
	const [color, setColor] = useState(x ? '#6730cf' : 'black');
	const handleAuth = () => {
		if (x.authenticated) {
			firebase.auth().signOut();
			setColor('black');
		} else {
			const provider = new firebase.auth.GoogleAuthProvider();
			firebase
				.auth()
				.signInWithPopup(provider)
				.then(() => {
					setColor('blue');
				});
		}
		return;
	};
	return (
		<Wrapper>
			<AccountCircleIcon
				style={{ fontSize: '49px', color: color }}
				onClick={handleAuth}
			/>
			<SettingsIcon style={{ fontSize: '49px' }} />
		</Wrapper>
	);
};

export default Sidebar;
