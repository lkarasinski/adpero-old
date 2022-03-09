import React from "react";
import styled from "styled-components";
import { Label } from "../../Atoms/Label/label";
import { Text } from "../../Atoms/Text/text";
import { Card } from "../../Atoms/Card/card";
import { Journey } from "@adpero/interfaces";

import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";

export interface JourneyCardProps {
    journey: Journey;
    isMobile: boolean;
}

export const JourneyCard: React.FC<JourneyCardProps> = ({
    journey,
    isMobile,
    ...props
}) => {
    return (
        <Wrapper {...props} isMobile={isMobile}>
            <Label>{journey.name}</Label>
            <Text>
                <FontAwesomeIcon icon={faCalendarDay} />{" "}
                {format(new Date(journey.startDate), "MM/dd/yyyy")} -{" "}
                {format(new Date(journey.endDate), "MM/dd/yyyy")}
            </Text>
            <ExpensesContainer>
                {journey.expenses?.map((category) => (
                    <Text key={category.id}>{category.title}</Text>
                ))}
            </ExpensesContainer>
        </Wrapper>
    );
};

const Wrapper = styled(Card)<{ isMobile?: boolean }>`
    max-width: ${({ isMobile }) => (isMobile ? "100%" : "19rem")};
    min-height: ${({ isMobile }) => (isMobile ? "100%" : "20rem")};
    padding: ${({ isMobile }) => (isMobile ? "1rem 2rem" : "2rem")};
`;

const ExpensesContainer = styled.div`
    margin-top: 1rem;
`;

export default JourneyCard;
