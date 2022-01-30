import React from "react";
import Label from "components-ui/Atoms/Label";
import styled from "styled-components";
import Text from "components-ui/Atoms/Text";
import Card from "components-ui/Atoms/Card";
import { format } from "date-fns";
import useMobile from "hooks/useMobile";

type Props = {
    numberOfUsers: number;
    startDate: Date;
    endDate: Date;
    totalCost: {
        value: number;
        currency: string;
    };
};

const SummaryPanel: React.FC<Props> = ({
    numberOfUsers,
    totalCost,
    startDate,
    endDate,
}) => {
    const isMobile = useMobile();

    return (
        <Wrapper isMobile={isMobile}>
            <Label isAccent>Summary</Label>
            <Grid>
                <DetailContainer>
                    <Text isSmall>Cost: </Text>
                    <Text color="dark">{totalCost.value}</Text>
                </DetailContainer>
                <DetailContainer>
                    <Text isSmall>Participants: </Text>
                    <Text color="dark">{numberOfUsers}</Text>
                </DetailContainer>
                <DetailContainer>
                    <Text isSmall>Departure date: </Text>
                    <Text color="dark">{format(startDate, "MM/dd/yyyy")}</Text>
                </DetailContainer>
                <DetailContainer>
                    <Text isSmall>Day of return: </Text>
                    <Text color="dark">{format(endDate, "MM/dd/yyyy")}</Text>
                </DetailContainer>
            </Grid>
        </Wrapper>
    );
};

const Wrapper = styled(Card)<{ isMobile: boolean }>`
    margin-top: ${({ isMobile }) => (isMobile ? "2rem" : "0")};
    max-width: ${({ isMobile }) => (isMobile ? "100%" : "19rem")};
    background-color: "#ffffff";
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 0.5rem;
`;

const DetailContainer = styled.div`
    display: grid;
    gap: 3px;
`;

export default SummaryPanel;
