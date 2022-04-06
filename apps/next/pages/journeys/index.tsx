import * as React from "react";
import type { NextPage } from "next";
import { useJourneys } from "@adpero/contexts";
import { CardsPanel, Heading } from "@adpero/ui";

const JourneysPage: NextPage = () => {
    const { journeys } = useJourneys();
    const allJourneys = journeys.map((journey) => {
        return journey.data;
    });

    return (
        <div>
            <Heading>Journeys</Heading>
            <CardsPanel cards={allJourneys} />
        </div>
    );
};

export default JourneysPage;
