import * as React from "react";
import type { NextPage } from "next";
import PageTransitionAnimation from "components-ui/Atoms/PageTransitionAnimation";
import Heading from "components-ui/Atoms/Heading";
import ParticipantsPanel from "components/ParticipantsPanel";
import useJourneys from "context/JourneysContext";
import InvitePanel from "components/InvitePanel";
import { useAuth } from "context/AuthContext";
import EditJourneyDataPanel from "components/EditJourneyDataPanel";
import styled from "styled-components";

const Edit: NextPage = () => {
    const { getCurrentJourney } = useJourneys();
    const { user } = useAuth();
    const journey = getCurrentJourney()?.data;

    const isUserTheAuthor = user?.email === journey?.author;

    return (
        <PageTransitionAnimation>
            <Heading>
                Edit journey{journey?.name ? `: ${journey.name}` : null}
            </Heading>
            <PageContent>
                <EditJourneyDataPanel buttonText="Save" />
                {isUserTheAuthor ? (
                    <ParticipantsContainer>
                        <ParticipantsPanel />
                    </ParticipantsContainer>
                ) : null}
                <InvitePanel userEmail={user?.email ?? ""} />
            </PageContent>
        </PageTransitionAnimation>
    );
};

const ParticipantsContainer = styled.div`
    grid-row: 1/3;
    grid-column: 2/2;
`;

const PageContent = styled.div`
    display: grid;
    grid-template-columns: 28rem 1fr;
    gap: 2rem;
`;

export default Edit;
