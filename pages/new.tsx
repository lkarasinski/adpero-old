import Heading from "components-ui/Atoms/Heading";
import PageTransitionAnimation from "components-ui/Atoms/PageTransitionAnimation";
import EditJourneyDataPanel from "components/EditJourneyDataPanel";
import { useAuth } from "context/AuthContext";
import type { NextPage } from "next";
import * as React from "react";

const New: NextPage = () => {
    const auth = useAuth();
    if (auth == undefined) {
        throw new Error("useAuth must be used within a AuthProvider");
    }

    return (
        <PageTransitionAnimation>
            <Heading>New journey</Heading>
            <EditJourneyDataPanel buttonText="Create" />
        </PageTransitionAnimation>
    );
};

export default New;
