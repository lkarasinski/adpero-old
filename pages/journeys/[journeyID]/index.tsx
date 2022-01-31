import * as React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";
import useJourneys from "context/JourneysContext";
import PageTransitionAnimation from "components-ui/Atoms/PageTransitionAnimation";
import Heading from "components-ui/Atoms/Heading";
import SummaryPanel from "components-ui/Molecules/SummaryPanel";
import PollsPanel from "components-ui/Organisms/PollsPanel";
import CardGrid from "components-ui/Templates/CardGrid";
import EditButton from "components-ui/Molecules/EditButton";
import DetailsCard from "components-ui/Molecules/DetailsCard";
import useMobile from "hooks/useMobile";
import calculateTotalCost from "functions/calculateTotalCost";

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
            <PageTransitionAnimation>
                <Wrapper>
                    <TopContainer isMobile={isMobile}>
                        <Heading>{journey.data.name}</Heading>
                        {isMobile ? null : (
                            <EditButton
                                isMobile={isMobile}
                                path={router.asPath}
                            />
                        )}
                    </TopContainer>
                    {isMobile ? (
                        <EditButton isMobile={isMobile} path={router.asPath} />
                    ) : null}
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
                    <CardGrid label="More details">
                        {journey.data.expenses?.map((category) => (
                            <DetailsCard
                                key={category.id}
                                expense={category}
                                isMobile={isMobile}
                            />
                        ))}
                    </CardGrid>
                </Wrapper>
            </PageTransitionAnimation>
        </>
    );
};

const TopContainer = styled.div<{ isMobile: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: ${({ isMobile }) => (isMobile ? "0" : "2rem")};
`;

const Wrapper = styled.div`
    position: relative;
`;

export default JourneyPage;
