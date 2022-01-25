import * as React from 'react';
import type { NextPage } from 'next';
import PageTransitionAnimation from 'components-ui/Atoms/PageTransitionAnimation';
import Heading from 'components-ui/Atoms/Heading';
import JourneyCategoriesGrid from 'components-ui/Templates/JourneyCategoriesGrid';
import useJourneys from 'context/JourneysContext';
import DetailsCard from 'components-ui/Molecules/DetailsCard';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Categories: NextPage = () => {
    const { getCurrentJourney } = useJourneys();
    const router = useRouter();
    const journey = getCurrentJourney();

    if (!journey || !journey.data) return null;
    return (
        <PageTransitionAnimation>
            <Heading>Categories</Heading>
            <JourneyCategoriesGrid>
                {journey.data.expenses?.map((category) => (
                    <Link
                        href={`/journeys/${router.query.journeyID}/edit/${category.id}`}
                        key={category.id}
                        passHref
                    >
                        <DetailsCard key={category.id} expense={category} />
                    </Link>
                ))}
            </JourneyCategoriesGrid>
        </PageTransitionAnimation>
    );
};

export default Categories;
