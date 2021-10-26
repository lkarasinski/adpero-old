import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Heading from "components/Atoms/Heading";
import EditButton from "components/Atoms/EditButton";
import SummaryPanel from "components/Molecules/SummaryPanel";
import ActivePollsPanel from "components/Organisms/ActivePollsPanel";
import { EditDetailsPanel } from "components/Organisms/EditDetailsPanel/EditDetailsPanel.stories";
import DetailsPanel from "components/Organisms/DetailsPanel";
import { JourneyData } from "utils/interfaces";
import useWindowWidth from "utils/functions/useWindowWidth";

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
    const width = useWindowWidth();

    useEffect(() => {
        width;
    }, [width]);

    return (
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
            <EditButton
                onClick={() => setIsEditModeEnabled(!isEditModeEnabled)}
                isInEditMode={isEditModeEnabled}
                isGrayedOut={false}
            />
            <ActivePollsPanel polls={polls} />
            {isEditModeEnabled ? (
                <EditDetailsPanel expenses={expenses} />
            ) : (
                <DetailsPanel expenses={expenses} />
            )}
        </Wrapper>
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
