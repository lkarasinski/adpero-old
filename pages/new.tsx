import Button from 'components-ui/Atoms/Button';
import Heading from 'components-ui/Atoms/Heading';
import PageTransitionAnimation from 'components-ui/Atoms/PageTransitionAnimation';
import EditJourneyDataPanel from 'components-ui/Organisms/EditJourneyDataPanel';
import { useAuth } from 'context/AuthContext';
import useJourneys from 'context/JourneysContext';
import { Formik, Form } from 'formik';
import type { NextPage } from 'next';

import { useRouter } from 'next/router';
import * as React from 'react';
import styled from 'styled-components';
import * as yup from 'yup';

const New: NextPage = () => {
    const router = useRouter();
    const auth = useAuth();
    if (auth == undefined) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    const { user } = auth;
    const { createJourney } = useJourneys();
    const [isCreating, setIsCreating] = React.useState(false);
    const userEmail = user?.email ?? '';

    const initialValues: any = {
        author: userEmail,
        createdAt: new Date(),
        editors: [],
        expenses: [],
        name: '',
        polls: [],
        users: [userEmail],
        startDate: new Date(),
        endDate: new Date(),
        id: '',
        lastEdited: new Date(),
        cost: { value: 0, currency: 'EUR' },
    };

    return (
        <PageTransitionAnimation>
            <Heading>New journey</Heading>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                    setIsCreating(true);
                    const journeyID = await createJourney(values);
                    router.push(`/journeys/${journeyID}`);
                }}
            >
                {({ errors }) => {
                    const typedErrors = errors as Errors;
                    return (
                        <StyledForm>
                            <EditJourneyDataPanel errors={typedErrors} />
                            <Button
                                disabled={isCreating}
                                type="submit"
                                color="primary"
                            >
                                Create
                            </Button>
                        </StyledForm>
                    );
                }}
            </Formik>
        </PageTransitionAnimation>
    );
};

type Errors = {
    name: string;
    startDate: string;
    endDate: string;
    cost: { value: string; currency: string };
};

const StyledForm = styled(Form)`
    max-width: 20rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    startDate: yup.date().required('Departure date is required'),
    endDate: yup.date().required('Return date is required'),
    cost: yup.object({
        value: yup.number(),
        currency: yup
            .string()
            .test(
                'len',
                'Enter currency code. For example: USD, GBP',
                (val) => val?.length === 3
            ),
    }),
});

export default New;
