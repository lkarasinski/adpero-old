import React, { useEffect, useState } from "react";
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
import Head from "next/head";
import formatDate from "functions/formatDate";

type defaultContextValue = {
    isEditModeEnabled: boolean;
    setIsEditModeEnabled: React.Dispatch<React.SetStateAction<boolean>>;
};

export const FormContext = React.createContext<defaultContextValue>(
    {} as defaultContextValue
);

const JourneyPage: React.FC = () => {
    const router = useRouter();
    const AuthUser = useAuthUser();
    const journeyID = router.query.journeyID as string;
    const [journeyData, state, setJourneyData] = useJourneyData(
        journeyID,
        AuthUser
    );
    const [isEditModeEnabled, setIsEditModeEnabled] = useState(false);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        if (journeyData) {
            let total = 0;
            journeyData.expenses.forEach((expense) => {
                expense.details.forEach(async (detail) => {
                    if (detail.type == "Price") {
                        if (detail.currency === journeyData.cost.currency) {
                            total += Number(detail.value);
                        }
                    }
                });
            });
            setTotalCost(total);
        }
    }, [journeyData]);

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
                    {isEditModeEnabled ? (
                        <EditJourney
                            journeyData={journeyData}
                            email={AuthUser.email ?? ""}
                            setJourneyData={setJourneyData}
                        />
                    ) : (
                        <>
                            <HeadingContainer>
                                <Heading>{journeyData.name}</Heading>
                            </HeadingContainer>
                            <SummaryPanel
                                numberOfUsers={journeyData.users.length}
                                isInSidePanel={false}
                                totalCost={{
                                    value: totalCost,
                                    currency: journeyData.cost.currency,
                                }}
                                startDate={formatDate(journeyData.startDate)}
                                endDate={formatDate(journeyData.endDate)}
                            />
                            <ActivePollsPanel polls={journeyData.polls} />
                            <JourneyDetails expenses={journeyData.expenses} />
                        </>
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
