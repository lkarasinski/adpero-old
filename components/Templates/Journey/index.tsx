import React from "react";
import Heading from "components/Atoms/Heading";
import JourneyInfo from "components/Organisms/JourneyInfo";
import styled from "styled-components";
import ActivePollsPanel from "components/Organisms/ActivePollsPanel";
import DetailsPanel from "components/Organisms/DetailsPanel";
import { JourneyData } from "utils/interfaces";

const Wrapper = styled.div`
    padding-right: 2rem;
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
    const journeyInfoData = {
        users,
        totalCost,
        startDate,
        endDate,
    };

    return (
        <Wrapper>
            <HeadingContainer>
                <Heading>{journeyName}</Heading>
            </HeadingContainer>
            <JourneyInfo {...journeyInfoData} />
            {polls.length > 0 && <ActivePollsPanel polls={polls} />}
            {expenses.length > 0 && <DetailsPanel expenses={expenses} />}
        </Wrapper>
    );
};

export default Journey;
