import Button from "components-ui/Atoms/Button";
import Text from "components-ui/Atoms/Text";
import Heading from "components-ui/Atoms/Heading";
import PageTransitionAnimation from "components-ui/Atoms/PageTransitionAnimation";
import { JoinJourneyErrors } from "context/JourneysContext/types";
import React from "react";

type Props = {
    handleClick: () => void;
    error?: JoinJourneyErrors;
};

const JoinPanel: React.FC<Props> = ({ handleClick, error }) => {
    if (error) {
        return (
            <PageTransitionAnimation>
                <Heading>Error</Heading>
                <Text>{error}</Text>
            </PageTransitionAnimation>
        );
    }

    if (error === null) {
        return (
            <PageTransitionAnimation>
                <Heading>You are able to join this journey</Heading>
                <Button onClick={handleClick}>Click here to do so</Button>
            </PageTransitionAnimation>
        );
    }
    return null;
};

export default JoinPanel;
