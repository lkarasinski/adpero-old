import React, { useContext } from 'react';
import styled from 'styled-components';
import { Form, Formik } from 'formik';
import Button from 'components-ui/Atoms/Button';
import { Expense, Journey } from 'utils/interfaces';
import { journeyValidationSchema } from './validation';
import { addNewExpense, saveJourney } from './functions';
import { useRouter } from 'next/router';
import EditButton from 'components-ui/Molecules/EditButton';
import { FormContext } from 'pages/journeys/[journeyID]';
// import useDeleteJourney from 'hooks/useDeleteJourney';
// import useCreatePoll from 'hooks/useCreatePoll';
import JourneyInfoPanel from './JourneyInfoPanel';
import Heading from 'components-ui/Atoms/Heading';
import EditCategoryCard from 'components-ui/Organisms/EditCategoryCard';
import useJourneys from 'context/JourneysContext';
import type { DocumentReference, DocumentData } from 'firebase/firestore';
import Link from 'next/link';

type Props = {
    journeyData: Journey;
    journeyRef: DocumentReference<DocumentData>;
    email: string;
    setJourneyData: React.Dispatch<React.SetStateAction<Journey | undefined>>;
};

const EditJourney: React.FC<Props> = ({
    journeyData,
    // journeyRef,
    email,
    setJourneyData,
}) => {
    const router = useRouter();
    const { updateJourney, deleteJourney } = useJourneys();
    const { setIsEditModeEnabled } = useContext(FormContext);
    const journeyID = router.query.journeyID as string;
    const createNewPoll = async () => {
        console.error('not implemented');
    };

    const submitChanges = (values: Journey) => {
        saveJourney({
            ID: journeyID,
            email,
            updateJourney,
            values,
            setIsEditModeEnabled: () => setIsEditModeEnabled(false),
            setJourneyData: setJourneyData,
        });
    };

    return (
        <Wrapper>
            <Link href={`/journeys/${journeyID}/edit`} passHref>
                <Button as={'a'} type="button">
                    Edit page
                </Button>
            </Link>
            <Formik
                initialValues={journeyData}
                onSubmit={(values: Journey) => submitChanges(values)}
                validationSchema={journeyValidationSchema}
            >
                {({ values, setValues, errors }) => {
                    const typedErrors = errors as Errors;
                    return (
                        <div>
                            <JourneyInfoPanel
                                deleteJourney={async () =>
                                    await deleteJourney(journeyID)
                                }
                                createNewPoll={createNewPoll}
                                email={email}
                                journeyID={journeyID}
                                participants={journeyData.users}
                            />
                            <pre>{JSON.stringify(errors, null, 2)}</pre>
                            <Button
                                onClick={() => {
                                    addNewExpense(values, setValues);
                                }}
                                type="button"
                            >
                                Add new category
                            </Button>
                            <Form>
                                <Heading>Categories</Heading>
                                {values.expenses.map(
                                    (expense: Expense, i: number) => (
                                        <Grid key={i}>
                                            <EditCategoryCard
                                                expense={expense}
                                                values={values}
                                                setValues={setValues}
                                                typedErrors={typedErrors}
                                                i={i}
                                            />
                                        </Grid>
                                    )
                                )}
                                <EditButton type="submit" isGrayedOut={false} />
                            </Form>
                        </div>
                    );
                }}
            </Formik>
        </Wrapper>
    );
};

export type Errors = {
    author: string;
    name: string;
    startDate: string;
    endDate: string;
    expenses: {
        title: string;
        details: {
            label: string;
            type: string;
            value: string;
            currency: string;
        }[];
    }[];
};

const Grid = styled.div`
    display: grid;
    /* grid-template-columns: repeat(auto-fit, 19rem); */
    gap: 2rem;
    margin-bottom: 10rem;
`;

const Wrapper = styled.div``;

export default EditJourney;
