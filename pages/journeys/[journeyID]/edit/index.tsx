import * as React from "react";
import type { NextPage } from "next";
import PageTransitionAnimation from "components-ui/Atoms/PageTransitionAnimation";
import Heading from "components-ui/Atoms/Heading";
import useJourneys from "context/JourneysContext";
import EditJourneyDataPanel from "components/EditJourneyDataPanel";

const Edit: NextPage = () => {
    const { getCurrentJourney } = useJourneys();
    const journey = getCurrentJourney()?.data;

    return (
        <PageTransitionAnimation>
            <Heading>
                Edit journey{journey?.name ? `: ${journey.name}` : null}
            </Heading>
            <EditJourneyDataPanel buttonText="Save" />
        </PageTransitionAnimation>
    );
};

export default Edit;
