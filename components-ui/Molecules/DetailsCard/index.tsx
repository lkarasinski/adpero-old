import React from "react";
import Label from "components-ui/Atoms/Label";
import styled from "styled-components";
import DetailsContainer from "../DetailsContainer";
import { Expense, Detail } from "utils/interfaces";
import formatDate from "functions/formatDate";
import getDateFromTimestamp from "functions/convertToDate";
import Card from "components-ui/Atoms/Card";

const Wrapper = styled(Card)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 19rem;
    height: 100%;
`;
const Grid = styled.div`
    display: grid;
    gap: 1.25rem;
    margin-top: 0.5rem;
`;

interface Props {
    expense: Expense;
}

const DetailsCard: React.FC<Props> = ({ expense, children, ...props }) => {
    return (
        <Wrapper {...props}>
            <div>
                <Label isAccent>{expense.title}</Label>
                <Grid>
                    {expense?.details.map((detail: Detail) => (
                        <DetailsContainer
                            label={detail.label}
                            value={`${
                                detail.type === "Date"
                                    ? formatDate(
                                          getDateFromTimestamp(detail.value)
                                      )
                                    : detail.value
                            } ${
                                detail.type === "Price" ? detail.currency : ""
                            }`}
                            key={detail.id}
                        />
                    ))}
                </Grid>
            </div>
            {children}
        </Wrapper>
    );
};

export default DetailsCard;
