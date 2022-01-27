import * as React from "react";
import type { NextPage } from "next";
import PageTransitionAnimation from "components-ui/Atoms/PageTransitionAnimation";
import Heading from "components-ui/Atoms/Heading";
import CardGrid from "components-ui/Templates/CardGrid";
import useJourneys from "context/JourneysContext";
import DetailsCard from "components-ui/Molecules/DetailsCard";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "components-ui/Atoms/Button";
import styled from "styled-components";
import { getEmptyCategory } from "utils/constants";

const Categories: NextPage = () => {
    const { getCurrentJourney, updateJourney } = useJourneys();
    const router = useRouter();
    const journey = getCurrentJourney();

    if (!journey || !journey.data) return null;

    const createNewCategory = async () => {
        const newJourney = journey.data;
        const currentCategories = [...newJourney.expenses];
        currentCategories.push(getEmptyCategory());
        newJourney.expenses = currentCategories;
        await updateJourney(journey.id, newJourney);
    };

    return (
        <PageTransitionAnimation>
            <div>
                <Heading>Categories</Heading>
                <Button onClick={createNewCategory}>New category</Button>
            </div>
            <CardGrid>
                {journey.data.expenses?.map((category) => (
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
            </CardGrid>
        </PageTransitionAnimation>
    );
};

const DetailsCardContainer = styled.div`
    height: 100%;
    cursor: pointer;
`;

export default Categories;
