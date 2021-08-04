import React from "react";
import MembersPanel from "components/Molecules/MembersPanel";
import SummaryPanel from "components/Molecules/SummaryPanel";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    gap: 2rem;
`;

interface Props {
    users: string[];
    startDate: string;
    endDate: string;
    totalCost: {
        value: number;
        currency: string;
    };
}

const JourneyInfo: React.FC<Props> = ({
    users,
    totalCost,
    startDate,
    endDate,
}) => {
    const summaryData = {
        numberOfUsers: users.length,
        totalCost,
        startDate,
        endDate,
    };
    return (
        <Wrapper>
            <SummaryPanel {...summaryData} />
            <MembersPanel users={users} />
        </Wrapper>
    );
};

export default JourneyInfo;
