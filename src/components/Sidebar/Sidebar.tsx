import React, { useContext } from 'react';

import styled from 'styled-components';
import firebase from './../../firebase';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
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
	const auth = useContext(AuthContext);
	const handleAuth = () => {
		if (auth.authenticated) {
			firebase.auth().signOut();
		} else {
			const provider = new firebase.auth.GoogleAuthProvider();
			firebase
				.auth()
				.signInWithPopup(provider)
				.then(() => {
					// setColor('blue');
				})
				.catch((err) => {
					const errorCode = err.code;
					const errorMessage = err.message;
					console.log(errorCode);
					console.log(errorMessage);
					alert(errorCode);
					alert(errorMessage);
				});
		}
		return;
	};
	return (
		<Wrapper>
			<LogInButton onClick={handleAuth}>
				{auth.authenticated ? 'Log out' : 'Log in'}
			</LogInButton>
			<SettingsIcon style={{ fontSize: '49px' }} />
		</Wrapper>
	);
};

export default Sidebar;
