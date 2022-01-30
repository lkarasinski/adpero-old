import React from "react";
import Label from "components-ui/Atoms/Label";
import styled from "styled-components";
import DetailsContainer from "../DetailsContainer";
import { Expense, Detail } from "utils/interfaces";
import { format } from "date-fns";
import getDateFromTimestamp from "functions/convertToDate";
import Card from "components-ui/Atoms/Card";

interface Props {
    expense: Expense;
    isMobile: boolean;
}

const DetailsCard: React.FC<Props> = ({
    expense,
    isMobile,
    children,
    ...props
}) => {
    return (
        <Wrapper isMobile={isMobile} {...props}>
            <div>
                <Label isAccent>{expense.title}</Label>
                <Grid>
                    {expense?.details.map((detail: Detail) => (
                        <DetailsContainer
                            label={detail.label}
                            value={`${
                                detail.type === "Date"
                                    ? format(
                                          getDateFromTimestamp(detail.value),
                                          "MM/dd/yyyy"
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

const Wrapper = styled(Card)<{ isMobile?: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: ${({ isMobile }) => (isMobile ? "100%" : "19rem")};
    height: 100%;
`;
const Grid = styled.div`
    display: grid;
    gap: 1.25rem;
    margin-top: 0.5rem;
`;

export default DetailsCard;
