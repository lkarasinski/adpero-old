import React from "react";
import Label from "components-ui/Atoms/Label";
import styled from "styled-components";
import DetailsContainer from "../DetailsContainer";
import { Detail, Expense } from "utils/interfaces";
import formatDate from "functions/formatDate";
import getDateFromTimestamp from "functions/convertToDate";
import Card from "components-ui/Atoms/Card";

const Wrapper = styled(Card)`
    flex-grow: 1;
    max-width: 19rem;
`;
const Flex = styled.div`
    display: grid;
    gap: 1.25rem;
    margin-top: 0.5rem;
`;

interface Props {
    expense: Expense;
    isLink?: boolean;
}

const DetailsCard: React.FC<Props> = ({ expense, ...props }) => {
    return (
        <Wrapper {...props}>
            <Label isAccent>{expense.title}</Label>
            <Flex>
                {expense?.details.map((detail: Detail) => (
                    <DetailsContainer
                        label={detail.label}
                        value={`${
                            detail.type === "Date"
                                ? formatDate(getDateFromTimestamp(detail.value))
                                : detail.value
                        } ${detail.type === "Price" ? detail.currency : ""}`}
                        key={detail.id}
                    />
                ))}
            </Flex>
        </Wrapper>
    );
};

export default DetailsCard;
