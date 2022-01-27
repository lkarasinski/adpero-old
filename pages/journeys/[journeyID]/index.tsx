import * as React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";
import formatDate from "functions/formatDate";
import useJourneys from "context/JourneysContext";
import PageTransitionAnimation from "components-ui/Atoms/PageTransitionAnimation";
import Heading from "components-ui/Atoms/Heading";
import SummaryPanel from "components-ui/Molecules/SummaryPanel";
import PollsPanel from "components-ui/Organisms/PollsPanel";
import CardGrid from "components-ui/Templates/CardGrid";
import EditButton from "components-ui/Molecules/EditButton";
import DetailsCard from "components-ui/Molecules/DetailsCard";

type defaultContextValue = {
    isEditModeEnabled: boolean;
    setIsEditModeEnabled: React.Dispatch<React.SetStateAction<boolean>>;
};

export const FormContext = React.createContext<defaultContextValue>(
    {} as defaultContextValue
);

const JourneyPage: NextPage = () => {
    const router = useRouter();
    const { getCurrentJourney } = useJourneys();
    const journey = getCurrentJourney();

    if (!journey || !journey.data) return null;
    return (
        <>
            <Head>
                <title>Adpero - {journey.data.name}</title>
            </Head>
            <PageTransitionAnimation>
                <Wrapper>
                    <Heading>{journey.data.name}</Heading>
                    <SummaryPanel
                        numberOfUsers={journey.data.users.length}
                        totalCost={{
                            value: 0,
                            currency: journey.data.cost.currency,
                        }}
                        startDate={formatDate(journey.data.startDate)}
                        endDate={formatDate(journey.data.endDate)}
                    />
                    <PollsPanel polls={journey.data.polls} />
                    <CardGrid label="More details">
                        {journey.data.expenses?.map((category) => (
                            <DetailsCard key={category.id} expense={category} />
                        ))}
                    </CardGrid>
                    <EditButton path={router.asPath} />
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
