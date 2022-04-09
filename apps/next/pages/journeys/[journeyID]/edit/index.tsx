import * as React from "react";
import type { NextPage } from "next";
import styled from "styled-components";
import EditJourneyDataPanel from "../../../../components/EditJourneyDataPanel";
import { useJourneys } from "@adpero/contexts";
import { dashboardTheme } from "@adpero/themes";
import { mobileScreenSize } from "@adpero/constants";
import { Button, Heading } from "@adpero/ui";

const Edit: NextPage = () => {
    const { getCurrentJourney, deleteJourney } = useJourneys();
    const journey = getCurrentJourney()?.data;

    return (
        <>
            <Heading>
                Edit journey{journey?.name ? `: ${journey.name}` : null}
            </Heading>
            <EditJourneyDataPanel buttonText="Save" />
            <StyledButton
                onClick={async () => await deleteJourney(journey?.id ?? "")}
                hoverColor={dashboardTheme.colors.red.regular}
                color={dashboardTheme.colors.red.extraLight}
            >
                Delete journey
            </StyledButton>
        </>
    );
};

const StyledButton = styled(Button)`
    width: 30rem;
    @media (max-width: ${mobileScreenSize}px) {
        width: 100%;
    }
`;

export default Edit;
