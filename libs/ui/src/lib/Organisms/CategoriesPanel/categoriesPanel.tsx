import * as React from "react";
import styled from "styled-components";
import { dashboardTheme } from "@adpero/themes";
import { Category } from "@adpero/interfaces";
import { Grid, Label, DetailsCard } from "../../../index";

export type CategoriesPanelProps = { categories: Category[] };

export const CategoriesPanel = ({ categories }: CategoriesPanelProps) => {
    if (!categories || categories.length === 0) return null;
    return (
        <StyledWrapper>
            <Label color={dashboardTheme.colors.primary.regular}>
                More categories
            </Label>
            <Grid>
                {categories.map((category) => (
                    <DetailsCard key={category.id} expense={category} />
                ))}
            </Grid>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    margin-top: 2rem;
`;

export default CategoriesPanel;
