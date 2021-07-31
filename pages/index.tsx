import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from "next-firebase-auth";
import firebase from "firebase";

const auth = firebase.auth();

function Home() {
    const AuthUser = useAuthUser();
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    };

    const hanldeAuth = () => {
        if (AuthUser.id) {
            AuthUser.signOut();
        } else {
            signInWithGoogle();
        }
    };

    return (
        <div>
            <>
                <button onClick={hanldeAuth}>
                    {AuthUser.id ? "Log out" : "Log in"}
                </button>
            </>
            Twój mail - {AuthUser.email ?? "Unknown"}
        </div>
    );
}

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Home);
