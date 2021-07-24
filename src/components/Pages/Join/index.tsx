import React, { useEffect } from "react";
import firebase from "@firebase";
import { ErrorMessage } from "@components/Shared/Text decoration/ErrorMessage";
import { RouteComponentProps } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const invitesRef = firebase.firestore().collection("invites");
const journeysRef = firebase.firestore().collection("journeys");

/**
 * Page with a join button. After clicking the button, logged in user will be added to the journey with id of the matching link id
 */
export const Join: React.FC<RouteComponentProps> = ({ match, history }) => {
    const [auth, loading] = useAuthState(firebase.auth());
    const [isInJourney, setIsInJourney] = React.useState(false);

    useEffect(() => {
        if (!loading) {
            isUserInJourney();
        }
    }, [auth]);

    if (loading) {
        return null;
        // LOADING
    }

    const isUserInJourney = async () => {
        if (auth) {
            const invitesData = await invitesRef
                .doc(match.url.split("/")[2])
                .get();
            const journeyID = invitesData.data()?.journeyID;
            const journeyDoc = journeysRef.doc(journeyID);

            const journeyData = await journeyDoc.get();
            const docData = journeyData.data();
            if (docData?.users.includes(auth.email)) {
                setIsInJourney(true);
            } else {
                setIsInJourney(false);
            }
        }
    };

    const joinJourney = async () => {
        if (auth) {
            const invitesData = await invitesRef
                .doc(match.url.split("/")[2])
                .get();
            const journeyID = invitesData.data()?.journeyID;
            const journeyDoc = journeysRef.doc(journeyID);
            const journeyData = await journeyDoc.get();
            const docData = journeyData.data();
            if (!docData?.users.includes(auth.email)) {
                await journeyDoc.update({
                    users: [...journeyData.data()?.users, auth.email],
                });
                history.push(`/journeys/${journeyID}`);
            }
        }
    };

    if (!auth) {
        return (
            <>
                <ErrorMessage>
                    You need to login to join this journey 🥺
                    {/* LOADING */}
                </ErrorMessage>
            </>
        );
    }

    return (
        <>
            {isInJourney ? (
                <div>
                    You have already joined this journey
                    <button
                        onClick={async () => {
                            if (auth) {
                                const invitesData = await invitesRef
                                    .doc(match.url.split("/")[2])
                                    .get();
                                const journeyID = invitesData.data()?.journeyID;
                                history.push(`/journeys/${journeyID}`);
                            }
                        }}
                    >
                        Go to the journey
                    </button>
                </div>
            ) : (
                <button onClick={joinJourney}>Join journey</button>
            )}
        </>
    );
};
