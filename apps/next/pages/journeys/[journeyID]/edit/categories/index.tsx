import * as React from "react";
import styled from "styled-components";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useJourneys } from "@adpero/contexts";
import { getEmptyCategory } from "@adpero/functions";
import { Heading, Button, DetailsCard, Grid } from "@adpero/ui";
import { dashboardTheme } from "@adpero/themes";

const Categories: NextPage = () => {
    const { getCurrentJourney, updateJourney } = useJourneys();
    const router = useRouter();
    const journey = getCurrentJourney();

    if (!journey || !journey.data) return null;

    const createNewCategory = async () => {
        const newJourney = journey.data;
        const currentCategories = [...newJourney.categories];
        const newCategory = getEmptyCategory();
        currentCategories.push(newCategory);
        newJourney.categories = currentCategories;
        await updateJourney(newJourney, journey.id);
        router.push(
            `/journeys/${router.query.journeyID}/edit/categories/${newCategory.id}`
        );
    };

    return (
        <>
            <TopContainer>
                <Heading>Categories: {journey.data.name}</Heading>
                <Button
                    onClick={createNewCategory}
                    type="button"
                    color={dashboardTheme.colors.primary.regular}
                >
                    New category
                </Button>
            </TopContainer>
            <Grid>
                {journey.data.categories?.map((category) => (
                    <Link
                        href={`/journeys/${router.query.journeyID}/edit/categories/${category.id}`}
                        key={category.id}
                        passHref
                    >
                        <DetailsCardContainer>
                            <DetailsCard key={category.id} expense={category} />
                        </DetailsCardContainer>
                    </Link>
                ))}
            </Grid>
        </>
    );
};

const TopContainer = styled.div`
    margin-bottom: 2rem;
`;

const DetailsCardContainer = styled.a`
    height: 100%;
    cursor: pointer;
`;

export default Categories;
