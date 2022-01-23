import Heading from 'components-ui/Atoms/Heading';
import PageTransitionAnimation from 'components-ui/Atoms/PageTransitionAnimation';
import CardsPanel from 'components-ui/Organisms/CardsPanel';
import useJourneyCards from 'hooks/useJourneyCards';
import type { NextPage } from 'next';

const Journeys: NextPage = () => {
    const journeyCards = useJourneyCards();
    return (
        <PageTransitionAnimation>
            <Heading>Journeys</Heading>
            <CardsPanel cards={journeyCards} />
        </PageTransitionAnimation>
    );
};

export default Journeys;
