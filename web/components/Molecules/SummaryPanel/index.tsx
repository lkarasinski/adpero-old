import React from "react";
import Label from "components/Atoms/Label";
import Text from "components/Atoms/Text";
import styled from "styled-components";

interface WrapperProps {
    isInSidePanel?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
    max-width: 19rem;
    padding: 2rem;
    background-color: "#ffffff";
    border-radius: ${({ theme, isInSidePanel }) =>
        isInSidePanel ? 0 : theme.borderRadius};
    box-shadow: 0 0 4px
        ${({ theme, isInSidePanel }) =>
            isInSidePanel ? "transparent" : theme.colors.shadow};
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 110px);
    gap: 20px;
    margin-top: 0.5rem;
`;

const DetailContainer = styled.div`
    display: grid;
    gap: 3px;
`;

interface Props {
    numberOfUsers: number;
    startDate: string;
    endDate: string;
    totalCost: {
        value: number;
        currency: string;
    };
    isInSidePanel: boolean;
}

const SummaryPanel: React.FC<Props> = ({
    numberOfUsers,
    totalCost,
    startDate,
    endDate,
    isInSidePanel,
}) => {
    return (
        <Wrapper isInSidePanel={isInSidePanel}>
            <Label isAccent>Summary</Label>
            <Grid>
                <DetailContainer>
                    <Text isSmall>Cost:</Text>
                    <Text isDark>
                        {totalCost.value} {totalCost.currency}
                    </Text>
                </DetailContainer>
                <DetailContainer>
                    <Text isSmall>Departure date:</Text>
                    <Text isDark>{startDate}</Text>
                </DetailContainer>
                <DetailContainer>
                    <Text isSmall>Number of people:</Text>
                    <Text isDark>{numberOfUsers}</Text>
                </DetailContainer>
                <DetailContainer>
                    <Text isSmall>Date of return:</Text>
                    <Text isDark>{endDate}</Text>
                </DetailContainer>
            </Grid>
        </Wrapper>
    );
};

export default SummaryPanel;
