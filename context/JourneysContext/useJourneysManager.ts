import * as React from 'react';
import firebaseApp from 'services/firebase';
import {
    getFirestore,
    query,
    where,
    updateDoc,
    doc,
    onSnapshot,
    collection,
    setDoc,
    deleteDoc,
    getDoc,
} from 'firebase/firestore';
import { Journey } from 'utils/interfaces';
import {
    UseJourneysManager,
    JourneyDataType,
    JourneysDataType,
    CreateJourney,
    DeleteJourney,
    UpdateJourney,
    useJoinJourney,
    JoinFunction,
    JoinJourneyErrors,
} from './types';
import { useAuth } from 'context/AuthContext';
import convertToDate from 'functions/convertToDate';
import type { Unsubscribe } from 'firebase/auth';

const database = getFirestore(firebaseApp);

const useJourneysManager: UseJourneysManager = () => {
    const auth = useAuth();
    if (auth === undefined) {
        throw new Error('useJourneys must be used within a AuthProvider');
    }
    const { user } = auth;

    const [journeys, setJourneys] = React.useState<JourneysDataType>([]);

    const getJourneys = async () => {
        const q = query(
            collection(database, 'journeys'),
            where('users', 'array-contains', user?.email ?? '')
        );

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const documentJourneys: JourneysDataType = [];
            querySnapshot.forEach((doc) => {
                const documentData = doc.data() as Journey;
                const journey: JourneyDataType = {
                    id: doc.id,
                    ref: doc.ref,
                    data: {
                        ...documentData,
                        createdAt: convertToDate(documentData.createdAt),
                        startDate: convertToDate(documentData.startDate),
                        endDate: convertToDate(documentData.endDate),
                    },
                };
                documentJourneys.push(journey);
            });
            setJourneys(documentJourneys);
        });
        return unsubscribe;
    };

    React.useEffect(() => {
        let unsubscribe: Unsubscribe | undefined;
        (async () => {
            unsubscribe = await getJourneys();
        })();

        return () => unsubscribe?.();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, user?.email]);

    const createJourney: CreateJourney = async (data: Journey) => {
        const randomID =
            Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15);
        data.id = randomID;
        await setDoc(doc(database, 'journeys', randomID), data);
        return randomID;
    };

    const deleteJourney: DeleteJourney = async (id: string) => {
        await deleteDoc(doc(database, 'journeys', id));
    };

    const updateJourney: UpdateJourney = async (
        journeyID: string,
        data: Journey
    ) => {
        const journeyRef = doc(database, 'journeys', journeyID);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const newData = data as { [key: string]: any };
        await updateDoc(journeyRef, newData);
    };

    const useJoinJourney: useJoinJourney = (inviteID) => {
        const [error, setError] = React.useState<JoinJourneyErrors>(null);
        const [joinFunction, setJoinFunction] =
            React.useState<JoinFunction>(null);

        React.useEffect(() => {
            (async () => {
                setError(null);
                if (user) {
                    const inviteRef = doc(database, 'invites', inviteID);
                    const inviteSnapshot = await getDoc(inviteRef);
                    if (inviteSnapshot.exists()) {
                        const inviteData = inviteSnapshot.data();
                        const journeyID = inviteData?.journeyID;
                        const journeyRef = doc(database, 'journeys', journeyID);
                        const journeySnapshot = await getDoc(journeyRef);
                        if (journeySnapshot.exists()) {
                            const journeyData =
                                journeySnapshot.data() as Journey;
                            const users = journeyData?.users ?? [];
                            if (!users.includes(user.email ?? '')) {
                                users.push(user.email ?? '');
                                journeyData.users = users;
                                const tempJoinFunction = async () => {
                                    await updateJourney(journeyID, journeyData);
                                    return journeyID;
                                };
                                setJoinFunction(() => tempJoinFunction);
                                return journeyID;
                            } else {
                                console.warn('User is already in the journey');
                                setError('UserAlreadyJoined');
                            }
                        } else {
                            console.warn('Journey does not exist');
                            setError('JourneyDoesNotExist');
                        }
                    } else {
                        console.warn('Invite does not exist');
                        setError('InviteDoesNotExist');
                    }
                } else {
                    console.warn('User is not logged in');
                    setError('UserNotLoggedIn');
                }
            })();
        }, [user?.email]);

        return { error, joinFunction };
    };

    return {
        journeys,
        deleteJourney,
        updateJourney,
        createJourney,
        useJoinJourney,
    };
};

export default useJourneysManager;
