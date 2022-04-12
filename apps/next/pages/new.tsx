import * as React from "react";
import styled from "styled-components";
import type { NextPage } from "next";
import { Heading } from "@adpero/ui";
import EditJourneyDataPanel from "../components/EditJourneyDataPanel";

const NewJourney: NextPage = () => {
    return (
        <div>
            <Heading>New journey</Heading>
            <EditPanelContainer>
                <EditJourneyDataPanel buttonText="Create new journey" />
            </EditPanelContainer>
        </div>
    );
};

const EditPanelContainer = styled.div`
    max-width: 36rem;
`;

export default NewJourney;
