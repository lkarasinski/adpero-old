import { Heading, Text, Button } from "@adpero/ui";
import { JoinJourneyErrors } from "@adpero/interfaces";
import React from "react";
import { dashboardTheme } from "@adpero/themes";

type Props = {
    handleClick: () => void;
    error?: JoinJourneyErrors;
};

export const JoinPanel: React.FC<Props> = ({ handleClick, error }) => {
    if (error) {
        return (
            <>
                <Heading>Error</Heading>
                <Text>{error}</Text>
            </>
        );
    }

    if (error === null) {
        return (
            <>
                <Heading>You are able to join this journey</Heading>
                <Button
                    color={dashboardTheme.colors.primary.regular}
                    onClick={handleClick}
                >
                    Click here to do so
                </Button>
            </>
        );
    }
    return null;
};

export default JoinPanel;
