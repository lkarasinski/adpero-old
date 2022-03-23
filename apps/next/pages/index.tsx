import * as React from "react";
import type { NextPage } from "next";
import { useJourneys } from "@adpero/contexts";
import { useNotVotedPolls } from "@adpero/hooks";
import { useMobile } from "@adpero/hooks";
import { categorizeJourneyData } from "@adpero/functions";
import { Heading, CardsPanel } from "@adpero/ui";

export const Index: NextPage = () => {
    const isMobile = useMobile();
    const { journeys } = useJourneys();
    const polls = useNotVotedPolls();
    const journeyData = journeys.map((j) => j.data);
    const { currentJourneys, upcomingJourneys, futureJourneys, pastJourneys } =
        categorizeJourneyData(journeyData);

    return (
        <div>
            <Heading>Dashboard</Heading>
            <CardsPanel
                isMobile={isMobile}
                label="Current journeys"
                cards={currentJourneys}
            />
            <CardsPanel
                isMobile={isMobile}
                label="Polls you haven't voted in yet"
                cards={polls}
            />
            <CardsPanel
                isMobile={isMobile}
                label="Upcoming journeys"
                cards={upcomingJourneys}
            />
            <CardsPanel
                isMobile={isMobile}
                label="Future journeys"
                cards={futureJourneys}
            />
            <CardsPanel
                isMobile={isMobile}
                label="Past journeys"
                cards={pastJourneys}
            />
        </div>
    );
};

export default Index;
