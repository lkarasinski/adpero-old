import React from "react";
import Label from "components-ui/Atoms/Label";
import styled from "styled-components";
import DetailsContainer from "../DetailsContainer";
import { Detail, Expense } from "utils/interfaces";
import formatDate from "functions/formatDate";
import getDateFromTimestamp from "functions/convertToDate";

const Wrapper = styled.div`
    flex-grow: 1;
    max-width: 19rem;
    padding: 2rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
`;
const Flex = styled.div`
    display: grid;
    gap: 1.25rem;
    margin-top: 0.5rem;
`;

interface Props {
    expense: Expense;
}

const DetailsCard: React.FC<Props> = ({ expense }) => {
    return (
        <Wrapper>
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
                        key={detail.label + detail.value}
                    />
                ))}
            </Flex>
        </Wrapper>
    );
};

export default DetailsCard;
