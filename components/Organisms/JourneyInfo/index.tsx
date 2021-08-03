import React from "react";
import MembersPanel from "components/Molecules/MembersPanel";
import SummaryPanel from "components/Molecules/SummaryPanel";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    gap: 2rem;
`;

const JourneyInfo: React.FC = () => {
    return (
        <Wrapper>
            <SummaryPanel />
            <MembersPanel />
        </Wrapper>
    );
};

export default JourneyInfo;
