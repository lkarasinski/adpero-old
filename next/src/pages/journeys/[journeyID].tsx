import React, { useState } from "react";
import { withAuthUser, withAuthUserTokenSSR } from "next-firebase-auth";
import { useRouter } from "next/router";
import useJourneyData from "hooks/useJourneyData";
import styled from "styled-components";
import Heading from "components/Atoms/Heading";
import SummaryPanel from "components/Molecules/SummaryPanel";
import ActivePollsPanel from "components/Organisms/ActivePollsPanel";
import JourneyDetails from "components/Templates/JourneyDetails";
import EditJourney from "components/Templates/EditJourney";
import { Timestamp } from "utils/interfaces";

type defaultContextValue = {
    isEditModeEnabled: boolean;
    setIsEditModeEnabled: React.Dispatch<React.SetStateAction<boolean>>;
};

export const FormContext = React.createContext<defaultContextValue>(
    {} as defaultContextValue
);

const formatDate = (date: Timestamp) => {
    return date?.toDate().toLocaleDateString().replaceAll("/", ".");
};

const JourneyPage: React.FC = () => {
    const router = useRouter();
    const journeyID = router.query.journeyID as string;
    const [journeyData, state] = useJourneyData(journeyID);
    const [isEditModeEnabled, setIsEditModeEnabled] = useState(false);

    if (state === "loading") return null;

    return (
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
                    endDate={formatDate(journeyData.startDate)}
                />
                <ActivePollsPanel polls={journeyData.polls} />
                {isEditModeEnabled ? (
                    <EditJourney expenses={journeyData.expenses} />
                ) : (
                    <JourneyDetails expenses={journeyData.expenses} />
                )}
            </Wrapper>
        </FormContext.Provider>
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
