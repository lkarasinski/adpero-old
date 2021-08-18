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

interface WrapperProps {
    isSidePanelOpen: boolean;
}

const Wrapper = styled.div<WrapperProps>`
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
    const width = useWindowWidth();

    useEffect(() => {
        if (width <= 920) {
            console.log("bieniu");
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

    return (
        <Wrapper isSidePanelOpen={isSidePanelOpen}>
            <HeadingContainer>
                <Heading>{journeyName}</Heading>
            </HeadingContainer>
            {width < 920 && (
                <SummaryPanel
                    numberOfUsers={users.length}
                    totalCost={totalCost}
                    startDate={startDate}
                    endDate={endDate}
                    isInSidePanel={false}
                />
            )}
            {polls.length > 0 && <ActivePollsPanel polls={polls} />}
            {expenses.length > 0 && <DetailsPanel expenses={expenses} />}
            {width >= 920 && <JourneyInfo {...journeyInfoProps} />}
            {width < 920 && <MembersPanel members={users} />}
        </Wrapper>
    );
};

export default Journey;
