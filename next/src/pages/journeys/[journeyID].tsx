import React, { useState } from "react";
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from "next-firebase-auth";
import { useRouter } from "next/router";
import useJourneyData from "hooks/useJourneyData";
import styled from "styled-components";
import Heading from "components-ui/Atoms/Heading";
import SummaryPanel from "components-ui/Molecules/SummaryPanel";
import ActivePollsPanel from "components-ui/Organisms/ActivePollsPanel";
import JourneyDetails from "components/JourneyDetails";
import EditJourney from "components/EditJourney";
import { Timestamp } from "utils/interfaces";
import Head from "next/head";

type defaultContextValue = {
    isEditModeEnabled: boolean;
    setIsEditModeEnabled: React.Dispatch<React.SetStateAction<boolean>>;
};

export const FormContext = React.createContext<defaultContextValue>(
    {} as defaultContextValue
);

const formatDate = (date: Timestamp) =>
    new Date(date.seconds * 1000).toLocaleDateString().replaceAll("/", ".");

const JourneyPage: React.FC = () => {
    const router = useRouter();
    const AuthUser = useAuthUser();
    const journeyID = router.query.journeyID as string;
    const [journeyData, state] = useJourneyData(journeyID, AuthUser);
    const [isEditModeEnabled, setIsEditModeEnabled] = useState(false);

    if (state === "loading") return null;
    if (state === "noData") return <div>missing journey</div>;
    if (state === "noAccess") return <div>you do not have access</div>;
    if (!journeyData) return null;

    return (
        <>
            <Head>
                <title>Adpero - {journeyData.name}</title>
            </Head>
            <FormContext.Provider
                value={{ isEditModeEnabled, setIsEditModeEnabled }}
            >
                <Wrapper>
                    <HeadingContainer>
                        <Heading>{journeyData.name}</Heading>
                    </HeadingContainer>
                    <SummaryPanel
                        numberOfUsers={journeyData.users.length}
                        isInSidePanel={false}
                        totalCost={{ value: 0, currency: "JPG" }}
                        startDate={formatDate(journeyData.startDate)}
                        endDate={formatDate(journeyData.endDate)}
                    />
                    <ActivePollsPanel polls={journeyData.polls} />
                    {isEditModeEnabled ? (
                        <EditJourney expenses={journeyData.expenses} />
                    ) : (
                        <JourneyDetails expenses={journeyData.expenses} />
                    )}
                </Wrapper>
            </FormContext.Provider>
        </>
    );
};

const Wrapper = styled.div`
    position: relative;
    padding-right: 2rem;
`;

const HeadingContainer = styled.div`
    margin-left: 2rem;
`;
export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(JourneyPage);
