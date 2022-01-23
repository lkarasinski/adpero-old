import * as React from 'react';
import type { NextPage } from 'next';
import PageTransitionAnimation from 'components-ui/Atoms/PageTransitionAnimation';
import Heading from 'components-ui/Atoms/Heading';

const Edit: NextPage = () => {
    return (
        <PageTransitionAnimation>
            <Heading>Edit journeys</Heading>
        </PageTransitionAnimation>
    );
};

export default Edit;
