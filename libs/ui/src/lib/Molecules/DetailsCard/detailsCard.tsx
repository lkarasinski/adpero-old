import React from "react";
import Label from "../../Atoms/Label/label";
import styled from "styled-components";
import DetailsContainer from "../DetailsContainer/detailsContainer";
import { Expense, Detail } from "@adpero/interfaces";
import { Card } from "../../Atoms/Card/card";
import { dashboardTheme } from "@adpero/themes";

export interface DetailsCardProps {
    expense: Expense;
    isMobile: boolean;
}

export const DetailsCard: React.FC<DetailsCardProps> = ({
    expense,
    isMobile,
    ...props
}) => {
    return (
        <Wrapper isMobile={isMobile} {...props}>
            <Label color={dashboardTheme.colors.primary.regular}>
                {expense.title}
            </Label>
            <Grid>
                {expense?.details.map((detail: Detail) => (
                    <DetailsContainer
                        label={detail.label}
                        value={`${detail.value} ${
                            detail.type === "Price" ? detail.currency : ""
                        }`}
                        key={detail.id}
                    />
                ))}
            </Grid>
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
