import React, { useEffect, useState } from "react";
import Heading from "components/Atoms/Heading";
import JourneyInfo from "components/Organisms/JourneyInfo";
import styled from "styled-components";
import ActivePollsPanel from "components/Organisms/ActivePollsPanel";
import DetailsPanel from "components/Organisms/DetailsPanel";
import { JourneyData } from "utils/interfaces";
import useWindowWidth from "utils/functions/useWindowWidth";
import SummaryPanel from "components/Molecules/SummaryPanel";
import MembersPanel from "components/Molecules/MembersPanel";
import EditButton from "components/Atoms/EditButton";
import { EditDetailsPanel } from "components/Organisms/EditDetailsPanel/EditDetailsPanel.stories";

interface WrapperProps {
    isSidePanelOpen: boolean;
}

const Wrapper = styled.div<WrapperProps>`
    position: relative;
    padding-right: 2rem;
    margin-right: ${({ isSidePanelOpen }) =>
        isSidePanelOpen ? "19rem" : "0rem"};
`;

const HeadingContainer = styled.div`
    margin-left: 2rem;
`;

const Journey: React.FC<JourneyData> = ({
    journeyName,
    users,
    totalCost,
    startDate,
    endDate,
    expenses,
    polls,
}) => {
    const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
    const [isEditModeEnabled, setIsEditModeEnabled] = useState(false);
    const width = useWindowWidth();

    useEffect(() => {
        if (width <= 920) {
            setIsSidePanelOpen(false);
        }
    }, [width]);

    const journeyInfoProps = {
        users,
        totalCost,
        startDate,
        endDate,
        isSidePanelOpen,
        setIsSidePanelOpen,
    };

    console.log(expenses);

    return (
        <Wrapper isSidePanelOpen={isSidePanelOpen}>
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
            {polls.length > 0 && <ActivePollsPanel polls={polls} />}
            {expenses.length > 0 && isEditModeEnabled ? (
                <EditDetailsPanel expenses={expenses} />
            ) : (
                <DetailsPanel expenses={expenses} />
            )}
            {width < 920 && <MembersPanel members={users} />}
        </Wrapper>
    );
};

export default Journey;
