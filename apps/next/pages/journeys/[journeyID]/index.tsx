import * as React from "react";
import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useMobile } from "@adpero/hooks";
import { useJourneys } from "@adpero/contexts";
import { calculateTotalCost } from "@adpero/functions";
import { mobileScreenSize } from "@adpero/constants";
import { Heading, SummaryPanel, PollsPanel, CategoriesPanel } from "@adpero/ui";
import EditButton from "../../../components/EditButton";

type defaultContextValue = {
    isEditModeEnabled: boolean;
    setIsEditModeEnabled: React.Dispatch<React.SetStateAction<boolean>>;
};

export const FormContext = React.createContext<defaultContextValue>(
    {} as defaultContextValue
);

const JourneyPage: NextPage = () => {
    const isMobile = useMobile();
    const router = useRouter();
    const { getCurrentJourney } = useJourneys();
    const journey = getCurrentJourney();
    const [totalCost, setTotalCost] = React.useState(0);

    React.useEffect(() => {
        (async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            if (journey?.data) {
                const cost = await calculateTotalCost(journey.data);
                setTotalCost(cost);
            }
        })();
    }, [journey]);

    if (!journey || !journey.data) return null;

    return (
        <>
            <Head>
                <title>Adpero - {journey.data.name}</title>
            </Head>
            <>
                <Wrapper>
                    <TopContainer>
                        <Heading>{journey.data.name}</Heading>
                        {isMobile ? null : (
                            <EditButton asPath={router.asPath} />
                        )}
                    </TopContainer>
                    {isMobile ? <EditButton asPath={router.asPath} /> : null}
                    <SummaryPanel
                        numberOfUsers={journey.data.users.length}
                        totalCost={{
                            value: totalCost,
                            currency: journey.data.cost.currency,
                        }}
                        startDate={journey.data.startDate}
                        endDate={journey.data.endDate}
                    />
                    <PollsPanel polls={journey.data.polls} />
                    <CategoriesPanel categories={journey.data.categories} />
                </Wrapper>
            </>
        </>
    );
};

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: ${mobileScreenSize}px) {
        margin-right: 2rem;
    }
`;

const Wrapper = styled.div`
    position: relative;
`;

export default JourneyPage;
