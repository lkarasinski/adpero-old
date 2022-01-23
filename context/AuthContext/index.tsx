import * as React from 'react';
import {
    User,
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import app from 'services/firebase';

interface IAuth {
    user: User | null;
    login: () => void;
    logout: () => void;
}

const AuthContext = React.createContext<IAuth>({
    user: null,
    login: () => {
        console.warn('Not loaded');
    },
    logout: () => {
        console.warn('Not loadeed');
    },
});

const auth = getAuth(app);

const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = React.useState<User | null>(null);
    const login = async () => {
        try {
            await signInWithPopup(auth, new GoogleAuthProvider());
        } catch (error) {
            console.error(error);
        }
    };
    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error(error);
        }
    };

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
