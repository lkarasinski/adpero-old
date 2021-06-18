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

const LogInButton = styled.button`
	height: 3rem;
	width: 5rem;
	background-color: transparent;
	border: 0.15rem solid black;
	border-radius: 1rem;
	cursor: pointer;
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
			<LogInButton onClick={handleAuth}>
				{x.authenticated ? 'Log out' : 'Log in'}
			</LogInButton>
			<SettingsIcon style={{ fontSize: '49px' }} />
		</Wrapper>
	);
};

export default Sidebar;
