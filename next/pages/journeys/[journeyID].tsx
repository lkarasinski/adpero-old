import React, { useState } from "react";
import { withAuthUser, withAuthUserTokenSSR } from "next-firebase-auth";
import Journey from "components/Templates/Journey";
import "firebase/firestore";
import { useRouter } from "next/router";
import useJourneyData from "utils/hooks/useJourneyData";
import styled from "styled-components";
import Heading from "components/Atoms/Heading";
import SummaryPanel from "components/Molecules/SummaryPanel";
import ActivePollsPanel from "components/Organisms/ActivePollsPanel";
import EditDetailsPanel from "components/Organisms/EditDetailsPanel";
import DetailsPanel from "components/Organisms/EditDetailsPanel";

const formJoruneyData = (joruney: any) => ({
    journeyName: joruney.name,
    totalCost: { value: 90, currency: "JPG" },
    startDate: "06.09.2021",
    endDate: "12.09.2021",
    users: joruney.users,
    expenses: joruney.expenses,
    polls: joruney.polls,
});

type defaultContextValue = {
    isEditModeEnabled: boolean;
    setIsEditModeEnabled: React.Dispatch<React.SetStateAction<boolean>>;
};

export const FormContext = React.createContext<defaultContextValue>(
    {} as defaultContextValue
);

const JourneyPage: React.FC = () => {
    const router = useRouter();
    const journeyID = router.query.journeyID as string;
    const [journeyData] = useJourneyData(journeyID);
    const [isEditModeEnabled, setIsEditModeEnabled] = useState(false);
    const {
        journeyName,
        users,
        totalCost,
        startDate,
        endDate,
        polls,
        expenses,
    } = formJoruneyData(journeyData);

    if (journeyData.length === 0) return null;

    return (
        <FormContext.Provider
            value={{ isEditModeEnabled, setIsEditModeEnabled }}
        >
            <Wrapper>
                <HeadingContainer>
                    <Heading>{journeyName}</Heading>
                </HeadingContainer>
                <SummaryPanel
                    numberOfUsers={users.length}
                    totalCost={totalCost}
                    startDate={startDate}
                    endDate={endDate}
                    isInSidePanel={false}
                />
                <ActivePollsPanel polls={polls} />
                {isEditModeEnabled ? (
                    <EditDetailsPanel expenses={expenses} />
                ) : (
                    <DetailsPanel expenses={expenses} />
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
