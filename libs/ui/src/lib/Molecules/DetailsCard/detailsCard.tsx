import React from "react";
import Label from "../../Atoms/Label/label";
import styled from "styled-components";
import DetailsContainer from "../DetailsContainer/detailsContainer";
import { Category, Detail } from "@adpero/interfaces";
import { Card } from "../../Atoms/Card/card";
import { dashboardTheme } from "@adpero/themes";
import { mobileScreenSize } from "@adpero/constants";

export interface DetailsCardProps {
    expense: Category;
    children?: React.ReactNode;
}

export const DetailsCard: React.FC<DetailsCardProps> = ({
    expense,
    children,
    ...props
}) => {
    return (
        <Wrapper {...props}>
            <div>
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
            </div>
            {children}
        </Wrapper>
    );
};

const Wrapper = styled(Card)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 19rem;
    @media (max-width: ${mobileScreenSize}px) {
        max-width: 100%;
    }
    height: 100%;
`;
const Grid = styled.div`
    display: grid;
    gap: 1.25rem;
    margin-top: 0.5rem;
`;

export default DetailsCard;
