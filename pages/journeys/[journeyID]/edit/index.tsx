import * as React from "react";
import type { NextPage } from "next";
import PageTransitionAnimation from "components-ui/Atoms/PageTransitionAnimation";
import Heading from "components-ui/Atoms/Heading";
import useJourneys from "context/JourneysContext";
import EditJourneyDataPanel from "components/EditJourneyDataPanel";
import DeleteButton from "components-ui/Molecules/DeleteButton";

const Edit: NextPage = () => {
    const { getCurrentJourney, deleteJourney } = useJourneys();
    const journey = getCurrentJourney()?.data;

    return (
        <PageTransitionAnimation>
            <Heading>
                Edit journey{journey?.name ? `: ${journey.name}` : null}
            </Heading>
            <EditJourneyDataPanel buttonText="Save" />
            <DeleteButton
                callback={async () => await deleteJourney(journey?.id ?? "")}
            >
                Delete journey
            </DeleteButton>
        </PageTransitionAnimation>
    );
};

export default Edit;
