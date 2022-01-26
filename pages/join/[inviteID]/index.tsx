import * as React from "react";
import type { NextPage } from "next";
import useJourneys from "context/JourneysContext";
import { useRouter } from "next/router";
import Heading from "components-ui/Atoms/Heading";
import Text from "components-ui/Atoms/Text";
import Button from "components-ui/Atoms/Button";

const InvitePage: NextPage = () => {
    const { useJoinJourney } = useJourneys();
    const router = useRouter();
    const inviteID = router.query.inviteID as string;
    const { error, joinFunction } = useJoinJourney(inviteID);

    switch (error) {
        case "InviteDoesNotExist": {
            return <Text color="red">Invite does not exist</Text>;
        }
        case "UserAlreadyJoined": {
            return (
                <Text color="red">You have already joined this journey</Text>
            );
        }
        case "JourneyDoesNotExist": {
            return <Text color="red">Journey does not exist</Text>;
        }
        case "UserNotLoggedIn": {
            return (
                <Text color="red">You must be logged in to accept invites</Text>
            );
        }
        case null: {
            if (!joinFunction) {
                return <Text color="red">Unknown error. Please try again</Text>;
            }

            const handleClick = async () => {
                const journeyID = await joinFunction();
                router.push(`/journeys/${journeyID}`);
            };

            return (
                <div>
                    <Heading>You are able to join this journey</Heading>
                    <Button onClick={handleClick}>Click here to do so</Button>
                </div>
            );
        }
    }
};

export default InvitePage;
