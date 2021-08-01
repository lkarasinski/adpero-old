import { init } from "next-firebase-auth";

let privateKey = process.env.FIREBASE_ADMIN_KEY as string;
privateKey = privateKey?.replace(/\\n/g, "\n");

const initAuth = () => {
    init({
        authPageURL: "/auth",
        appPageURL: "/",
        loginAPIEndpoint: "/api/login",
        logoutAPIEndpoint: "/api/logout",
        firebaseAdminInitConfig: {
            credential: {
                projectId: "adpero-1a98f",
                clientEmail:
                    "firebase-adminsdk-g4kyx@adpero-1a98f.iam.gserviceaccount.com",
                privateKey: privateKey,
            },
            databaseURL: "",
        },
        firebaseClientInitConfig: {
            apiKey: "AIzaSyA3Jczs7ht_gFUrZIB0jbn74jQZPoybNWc", // required
            authDomain: "adpero-1a98f.firebaseapp.com",
            projectId: "adpero-1a98f",
            databaseURL: "",
        },
        cookies: {
            name: "adpero",
            keys: [
                process.env.COOKIE_SECRET_CURRENT,
                process.env.COOKIE_SECRET_PREVIOUS,
            ],
            httpOnly: true,
            maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
            overwrite: true,
            path: "/",
            sameSite: "strict",
            secure: false, // set this to false in local (non-HTTPS) development
            signed: true,
        },
    });
};
export default initAuth;
