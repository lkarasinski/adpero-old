import React from "react";
import Icon from "components/Atoms/Icon";
import MembersPanel from "components/Molecules/MembersPanel";
import SummaryPanel from "components/Molecules/SummaryPanel";
import { faCompressAlt, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

interface WrapperProps {
    isHidden: boolean;
}

const Wrapper = styled.div<WrapperProps>`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;
    width: 309px;
    height: 100vh;
    padding-top: 2rem;
    user-select: none;
    background-color: #ffffff;
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.shadow};
    transition: transform 0.3s ease-in-out;
    transform: translateX(${({ isHidden }) => (isHidden ? "309px" : "0")});
`;

const IconContainer = styled.div`
    position: fixed;
    top: 2rem;
    right: 2rem;
    z-index: 20;
    display: grid;
    place-items: center;
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
    cursor: pointer;
    user-select: none;
    transition: color 0.1s ease-in-out;

    :hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

interface Props {
    users: string[];
    startDate: string;
    endDate: string;
    totalCost: {
        value: number;
        currency: string;
    };
    isSidePanelOpen: boolean;
    setIsSidePanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const JourneyInfo: React.FC<Props> = ({
    users,
    totalCost,
    startDate,
    endDate,
    isSidePanelOpen,
    setIsSidePanelOpen,
}) => {
    const summaryData = {
        numberOfUsers: users.length,
        totalCost,
        startDate,
        endDate,
    };

    return (
        <>
            <IconContainer onClick={() => setIsSidePanelOpen(!isSidePanelOpen)}>
                <Icon icon={isSidePanelOpen ? faCompressAlt : faInfoCircle} />
            </IconContainer>
            <Wrapper isHidden={!isSidePanelOpen}>
                <SummaryPanel isInSidePanel={true} {...summaryData} />
                <MembersPanel members={users} />
            </Wrapper>
        </>
    );
};

export default JourneyInfo;
