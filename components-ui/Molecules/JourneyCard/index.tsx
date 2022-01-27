import React from "react";
import styled from "styled-components";
import Label from "components-ui/Atoms/Label";
import Text from "components-ui/Atoms/Text";
import Link from "next/link";
import Card from "components-ui/Atoms/Card";
import Icon from "components-ui/Atoms/Icon";
import { Journey } from "utils/interfaces";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";

interface Props {
    journey: Journey;
}

const JourneyCard: React.FC<Props> = ({ journey, ...props }) => (
    <Link href={`/journeys/${journey.id}`} passHref>
        <Wrapper {...props} as={"a"}>
            <Label>{journey.name}</Label>

            <Text color="dark">
                <Icon icon={faCalendarDay} />{" "}
                {format(journey.startDate, "MM/dd/yyyy")} -{" "}
                {format(journey.endDate, "MM/dd/yyyy")}
            </Text>
            <ExpensesContainer>
                {journey.expenses?.map((category) => (
                    <Text key={category.id}>{category.title}</Text>
                ))}
            </ExpensesContainer>
        </Wrapper>
    </Link>
);

const Wrapper = styled(Card)`
    max-width: 19rem;
    min-height: 20rem;
    cursor: pointer;
`;

const ExpensesContainer = styled.div`
    margin-top: 1rem;
`;

export default JourneyCard;
