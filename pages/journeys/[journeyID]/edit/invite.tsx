import * as React from "react";
import type { NextPage } from "next";
import InvitePanel from "components/InvitePanel";
import { useAuth } from "context/AuthContext";
import styled from "styled-components";
import Heading from "components-ui/Atoms/Heading";
import useJourneys from "context/JourneysContext";

const EditInvitePage: NextPage = () => {
    const { user } = useAuth();
    const { getCurrentJourney } = useJourneys();
    const journey = getCurrentJourney()?.data;

    return (
        <Wrapper>
            <Heading>{journey?.name} - Invite</Heading>
            <InvitePanel userEmail={user?.email ?? ""} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    max-width: 30rem;
`;

export default EditInvitePage;
