import * as React from "react";
import type { NextPage } from "next";
import ParticipantsPanel from "components/ParticipantsPanel";
import { useAuth } from "context/AuthContext";
import useJourneys from "context/JourneysContext";

const EditParticipantsPage: NextPage = () => {
    const { getCurrentJourney } = useJourneys();
    const journey = getCurrentJourney()?.data;
    const { user } = useAuth();

    const isUserTheAuthor = user?.email === journey?.author;

    return <div>{isUserTheAuthor ? <ParticipantsPanel /> : null}</div>;
};

export default EditParticipantsPage;
