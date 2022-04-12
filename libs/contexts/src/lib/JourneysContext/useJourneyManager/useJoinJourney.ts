import * as React from "react";
import { Journey } from "@adpero/interfaces";
import { doc, getDoc } from "firebase/firestore";
import { JoinJourneyErrors, JoinFunction } from "../types";
import updateJourney from "./updateJourney";
import { UseJoinJourney } from "../types";

const useJoinJourney: UseJoinJourney = ({ id, database, user }) => {
    const [error, setError] = React.useState<JoinJourneyErrors>("");
    const [joinFunction, setJoinFunction] = React.useState<JoinFunction>(null);

    React.useEffect(() => {
        (async () => {
            if (user) {
                const inviteRef = doc(database, "invites", id);
                const inviteSnapshot = await getDoc(inviteRef);
                if (inviteSnapshot.exists()) {
                    const inviteData = inviteSnapshot.data();
                    const journeyID = inviteData?.["journeyID"];
                    const journeyRef = doc(database, "journeys", journeyID);
                    const journeySnapshot = await getDoc(journeyRef);
                    if (journeySnapshot.exists()) {
                        const journeyData = journeySnapshot.data() as Journey;
                        const users = journeyData?.users ?? [];
                        if (!users.includes(user.email ?? "")) {
                            users.push(user.email ?? "");
                            journeyData.users = users;
                            const tempJoinFunction = async () => {
                                await updateJourney({
                                    id: journeyID,
                                    data: journeyData,
                                });
                                return journeyID;
                            };
                            setJoinFunction(() => tempJoinFunction);
                            setError(null);

                            return journeyID;
                        } else {
                            console.warn(
                                "You have already joined this journey"
                            );
                            setError("You have already joined this journey");
                        }
                    } else {
                        console.warn("Journey does not exist");
                        setError("Journey does not exist");
                    }
                } else {
                    console.warn("Invite does not exist");
                    setError("Invite does not exist");
                }
            } else {
                console.warn("You must be logged in to accept invites");
                setError("You must be logged in to accept invites");
            }
        })();
    }, [user?.email]);

    return { error, joinFunction };
};

export default useJoinJourney;
