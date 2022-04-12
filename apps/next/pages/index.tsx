import * as React from "react";
import type { NextPage } from "next";
import { useJourneys } from "@adpero/contexts";
import { useNotVotedPolls } from "@adpero/hooks";
import { categorizeJourneyData } from "@adpero/functions";
import { Heading, CardsPanel } from "@adpero/ui";

export const Index: NextPage = () => {
    const { journeys } = useJourneys();
    const polls = useNotVotedPolls();
    const journeyData = journeys.map((j) => j.data);
    const { currentJourneys, upcomingJourneys, futureJourneys, pastJourneys } =
        categorizeJourneyData(journeyData);

    return (
        <div>
            <Heading>Dashboard</Heading>
            <CardsPanel label="Current journeys" cards={currentJourneys} />
            <CardsPanel label="Polls you haven't voted in yet" cards={polls} />
            <CardsPanel label="Upcoming journeys" cards={upcomingJourneys} />
            <CardsPanel label="Future journeys" cards={futureJourneys} />
            <CardsPanel label="Past journeys" cards={pastJourneys} />
        </div>
    );
};

export default Index;
