import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

type ContextProps = {
	user: firebase.User | null;
	authenticated: boolean;
	setUser: any;
};

export const AuthContext = React.createContext<Partial<ContextProps>>({});

export const AuthProvider: React.FC = ({ children }: any) => {
	const [user, setUser] = useState(null as firebase.User | null);

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user: any) => {
			setUser(user);
		});
	}, []);

	return (
		<AuthContext.Provider
			value={{
				user,
				authenticated: user !== null,
				setUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
