import Heading from "components-ui/Atoms/Heading";
import PageTransitionAnimation from "components-ui/Atoms/PageTransitionAnimation";
import CardsPanel from "components-ui/Organisms/CardsPanel";
import useJourneys from "context/JourneysContext";
import type { NextPage } from "next";

const Journeys: NextPage = () => {
    const { journeys } = useJourneys();
    const allJourneys = journeys.map((journey) => {
        return journey.data;
    });
    return (
        <PageTransitionAnimation>
            <Heading>Journeys</Heading>
            <CardsPanel cards={allJourneys} />
        </PageTransitionAnimation>
    );
};

export default Journeys;
