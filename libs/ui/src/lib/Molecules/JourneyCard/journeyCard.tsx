import React from "react";
import styled from "styled-components";
import { Label } from "../../Atoms/Label/label";
import { Text } from "../../Atoms/Text/text";
import { Card } from "../../Atoms/Card/card";
import { Journey } from "@adpero/interfaces";

import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import { mobileScreenSize } from "@adpero/constants";

export interface JourneyCardProps {
    journey: Journey;
}

export const JourneyCard: React.FC<JourneyCardProps> = ({
    journey,
    ...props
}) => {
    return (
        <Wrapper {...props}>
            <Label>{journey.name}</Label>
            <Text>
                <FontAwesomeIcon icon={faCalendarDay} />{" "}
                {format(new Date(journey.startDate), "MM/dd/yyyy")} -{" "}
                {format(new Date(journey.endDate), "MM/dd/yyyy")}
            </Text>
            <CategoriesContainer>
                {journey.categories?.map((category) => (
                    <Text key={category.id}>{category.title}</Text>
                ))}
            </CategoriesContainer>
        </Wrapper>
    );
};

const Wrapper = styled(Card)`
    max-width: 19rem;
    min-height: 20rem;
    padding: 2rem;

    @media (max-width: ${mobileScreenSize}px) {
        max-width: 100%;
        min-height: 100%;
        padding: 1rem 2rem;
    }
`;

const CategoriesContainer = styled.div`
    margin-top: 1rem;
`;

export default JourneyCard;
