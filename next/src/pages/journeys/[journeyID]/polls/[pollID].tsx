import Heading from "components-ui/Atoms/Heading";
import Text from "components-ui/Atoms/Text";
import usePollPage from "hooks/usePollPage";
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from "next-firebase-auth";
import { useRouter } from "next/router";
import React from "react";

const PollPage: React.FC = () => {
    const router = useRouter();
    const pollID = router.query.pollID as string;
    const journeyID = router.query.journeyID as string;
    const AuthUser = useAuthUser();
    const [pollData] = usePollPage(journeyID, pollID);

    if (journeyID.startsWith("offline")) {
        return <Heading>Offline journeys do not have access to polls</Heading>;
    }

    if (!AuthUser.email) {
        return <Heading>Polls are disabled for offline users</Heading>;
    }

    if (!pollData) {
        return <Text>loading</Text>;
    }

    return (
        <div>
            <Heading>{pollData.title}</Heading>
            <Text>Poll ID: </Text>
            <code>{pollData.id}</code>
            <Text>Poll content:</Text>
            {pollData.content.map((content) => (
                <div key={content.id}>{JSON.stringify(content)}</div>
            ))}
            <Text>Poll votes:</Text>
            {pollData.votes.map((vote) => (
                <div key={vote.id}>{JSON.stringify(vote)}</div>
            ))}
        </div>
    );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(PollPage);
