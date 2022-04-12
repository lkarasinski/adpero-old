import * as React from "react";
import type { NextPage } from "next";
import styled from "styled-components";
import { useAuth, useJourneys } from "@adpero/contexts";
import { Heading } from "@adpero/ui";
import InvitePanel from "../../../../components/InvitePanel";

const EditInvitePage: NextPage = () => {
    const { user } = useAuth();
    const { getCurrentJourney } = useJourneys();
    const journey = getCurrentJourney()?.data;

    return (
        <Wrapper>
            <Heading>Invite: {journey?.name}</Heading>
            <InvitePanel userEmail={user?.email ?? ""} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    max-width: 30rem;
`;

export default EditInvitePage;
