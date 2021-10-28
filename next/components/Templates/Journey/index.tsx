import React, { useState } from "react";
import styled from "styled-components";
import Heading from "components/Atoms/Heading";
import SummaryPanel from "components/Molecules/SummaryPanel";
import ActivePollsPanel from "components/Organisms/ActivePollsPanel";
import EditDetailsPanel from "components/Organisms/EditDetailsPanel";
import DetailsPanel from "components/Organisms/DetailsPanel";
import { JourneyData } from "utils/interfaces";

type defaultContextValue = {
    isEditModeEnabled: boolean;
    setIsEditModeEnabled: React.Dispatch<React.SetStateAction<boolean>>;
};

export const FormContext = React.createContext<defaultContextValue>(
    {} as defaultContextValue
);

const Journey: React.FC<JourneyData> = ({
    journeyName,
    users,
    totalCost,
    startDate,
    endDate,
    expenses,
    polls,
}) => {
    const [isEditModeEnabled, setIsEditModeEnabled] = useState(false);

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

export default Journey;
