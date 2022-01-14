import React from "react";
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from "next-firebase-auth";
import { useRouter } from "next/router";
import useJoinWithInvite from "hooks/useJoinWithInvite";
import Heading from "components-ui/Atoms/Heading";
import StyledButton from "components-ui/Atoms/Button";
import Text from "components-ui/Atoms/Text";

const InvitePage: React.FC = () => {
    const router = useRouter();
    const inviteID = router.query.inviteID as string;
    const user = useAuthUser();
    const [isAbleToJoin, joinJourney] = useJoinWithInvite(inviteID, user.email);

    if (!user.email) {
        return <Heading>You must be logged in to accept invites</Heading>;
    }

    if (isAbleToJoin && joinJourney) {
        return (
            <div>
                <Heading>You are able to join this journey</Heading>
                <StyledButton onClick={() => joinJourney()}>
                    Click here to do so
                </StyledButton>
            </div>
        );
    } else {
        return (
            <div>
                <Heading>You are unable to join this journey</Heading>
                <Text>Maybe you already accepted your invitation?</Text>
            </div>
        );
    }
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(InvitePage);
