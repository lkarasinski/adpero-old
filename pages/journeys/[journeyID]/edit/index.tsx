import * as React from 'react';
import type { NextPage } from 'next';
import PageTransitionAnimation from 'components-ui/Atoms/PageTransitionAnimation';
import Heading from 'components-ui/Atoms/Heading';
import ParticipantsPanel from 'components/ParticipantsPanel';
import useJourneys from 'context/JourneysContext';
import { useRouter } from 'next/router';
import InvitePanel from 'components/InvitePanel';
import { useAuth } from 'context/AuthContext';
import EditJourneyDataPanel from 'components-ui/Organisms/EditJourneyDataPanel';
import { Formik, Form } from 'formik';
import styled from 'styled-components';

const Edit: NextPage = () => {
    const { journeys } = useJourneys();
    const { user } = useAuth();
    const router = useRouter();

    const journeyID = router.query.journeyID as string;

    const journey = journeys.find((journey) => journey.id === journeyID)?.data;

    const users = journey?.users;

    const initialValues = {
        name: journey?.name,
        startDate: journey?.startDate,
        endDate: journey?.endDate,
        cost: {
            currency: journey?.cost.currency,
        },
    };

    return (
        <PageTransitionAnimation>
            <Heading>Edit journeys</Heading>
            <Formik
                initialValues={initialValues}
                onSubmit={async (values) => {
                    console.log(values);
                }}
            >
                {({ errors }) => {
                    const typedErrors = errors;
                    return (
                        <StyledForm>
                            <EditJourneyDataPanel errors={typedErrors} />
                        </StyledForm>
                    );
                }}
            </Formik>
            <InvitePanel userEmail={user?.email ?? ''} journeyID={journeyID} />
            <ParticipantsPanel participants={users} />
        </PageTransitionAnimation>
    );
};

const StyledForm = styled(Form)``;

export default Edit;
