import React, { useContext } from "react";
import styled from "styled-components";
import { Form, Formik } from "formik";
import Button from "components-ui/Atoms/Button";
import EditDetailsCard from "components-ui/Molecules/EditDetailsCard";
import { Expense, Journey } from "utils/interfaces";
import { journeyValidationSchema } from "./validation";
import { addNewDetail, addNewExpense, saveJourney } from "./functions";
import firebase from "firebase/app";
import "firebase/firestore";
import { useRouter } from "next/router";
import EditButton from "components-ui/Molecules/EditButton";
import { FormContext } from "pages/journeys/[journeyID]";
import { StyledField } from "components-ui/Molecules/InputField";
import EditJourneyDataPanel from "components-ui/Organisms/EditJourneyDataPanel";
import useDeleteJourney from "hooks/useDeleteJourney";

type Props = {
    journeyData: Journey;
    email: string;
};

const collectionRef = firebase.firestore().collection("journeys");

const EditJourney: React.FC<Props> = ({ journeyData, email }) => {
    const router = useRouter();
    const { setIsEditModeEnabled } = useContext(FormContext);
    const journeyID = router.query.journeyID as string;
    const [deleteJourney] = useDeleteJourney(journeyID);

    const docRef = collectionRef.doc(journeyID);

    const updateDatabase = (values: Journey) => {
        saveJourney({
            ID: journeyID,
            email,
            updateDB: (values: any) => docRef.set({ ...values }),
            values,
            setIsEditModeEnabled: () => setIsEditModeEnabled((value) => !value),
        });
    };

    return (
        <Wrapper>
            <Formik
                initialValues={journeyData}
                onSubmit={(values: Journey) => updateDatabase(values)}
                validationSchema={journeyValidationSchema}
            >
                {({ values, setValues, errors }) => {
                    const typedErrors = errors as Errors;
                    return (
                        <div>
                            <button type="button" onClick={deleteJourney}>
                                Delete journey
                            </button>
                            <EditJourneyDataPanel errors={{}} />
                            <pre>{JSON.stringify(errors, null, 2)}</pre>
                            <Button
                                onClick={() => {
                                    addNewExpense(values, setValues);
                                }}
                                type="button"
                            >
                                New category
                            </Button>
                            <Form>
                                {values.expenses.map(
                                    (expense: Expense, i: number) => (
                                        <Grid key={i}>
                                            <StyledField
                                                name={`expenses[${i}].title`}
                                                type="input"
                                            />

                                            {expense.details.map(
                                                (_, j: number) => (
                                                    <EditDetailsCard
                                                        key={`${i}-${j}`}
                                                        values={values}
                                                        IDs={[i, j]}
                                                        setValues={setValues}
                                                        errors={typedErrors}
                                                    />
                                                )
                                            )}

                                            <Button
                                                onClick={() =>
                                                    addNewDetail(
                                                        values,
                                                        i,
                                                        setValues
                                                    )
                                                }
                                                type="button"
                                            >
                                                New detail
                                            </Button>
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

type Errors = {
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
    grid-template-columns: repeat(auto-fit, 19rem);
    gap: 2rem;
    margin-bottom: 10rem;
`;

const Wrapper = styled.div``;

export default EditJourney;
