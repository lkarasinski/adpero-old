import * as React from "react";
import type { NextPage } from "next";
import { useJourneys } from "@adpero/contexts";
import { CardsPanel, Heading } from "@adpero/ui";
import { useMobile } from "@adpero/hooks";

const JourneysPage: NextPage = () => {
    const isMobile = useMobile();
    const { journeys } = useJourneys();
    const allJourneys = journeys.map((journey) => {
        return journey.data;
    });

    return (
        <div>
            <Heading>Journeys</Heading>
            <CardsPanel isMobile={isMobile} cards={allJourneys} />
        </div>
    );
};

export default JourneysPage;
