import * as React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import formatDate from 'functions/formatDate';
import useJourneys from 'context/JourneysContext';
import JourneyDetails from 'components/JourneyDetails';
import PageTransitionAnimation from 'components-ui/Atoms/PageTransitionAnimation';
import Heading from 'components-ui/Atoms/Heading';
import SummaryPanel from 'components-ui/Molecules/SummaryPanel';
import ActivePollsPanel from 'components-ui/Organisms/ActivePollsPanel';
import Link from 'next/link';

type defaultContextValue = {
    isEditModeEnabled: boolean;
    setIsEditModeEnabled: React.Dispatch<React.SetStateAction<boolean>>;
};

export const FormContext = React.createContext<defaultContextValue>(
    {} as defaultContextValue
);

const JourneyPage: NextPage = () => {
    const router = useRouter();
    const journeyID = router.query.journeyID as string;
    const { journeys } = useJourneys();
    const journey = journeys.find(({ data }) => data.id === journeyID);
    const [journeyData, setJourneyData] = React.useState(journey?.data);

    React.useEffect(() => {
        setJourneyData(journey?.data);
    }, [journey?.data, journeys]);

    if (!journey || !journeyData) return null;
    return (
        <>
            <Head>
                <title>Adpero - {journeyData.name}</title>
            </Head>
            <PageTransitionAnimation>
                <Wrapper>
                    <Link href={`/journeys/${journeyID}/edit`} passHref>
                        <button type="button">Edit</button>
                    </Link>
                    <Heading>{journeyData.name}</Heading>
                    <SummaryPanel
                        numberOfUsers={journeyData.users.length}
                        totalCost={{
                            value: 0,
                            currency: journeyData.cost.currency,
                        }}
                        startDate={formatDate(journeyData.startDate)}
                        endDate={formatDate(journeyData.endDate)}
                    />
                    <ActivePollsPanel polls={journeyData.polls} />
                    <JourneyDetails expenses={journeyData.expenses} />
                </Wrapper>
            </PageTransitionAnimation>
        </>
    );
};

const Wrapper = styled.div`
    position: relative;
    padding-right: 2rem;
`;

export default JourneyPage;
