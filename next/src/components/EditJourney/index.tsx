import React, { useContext } from "react";
import styled from "styled-components";
import { Form, Formik } from "formik";
import Button from "components-ui/Atoms/Button";
import EditDetailsCard from "components-ui/Molecules/EditDetailsCard";
import { Expense } from "utils/interfaces";
import { validationSchema } from "./validation";
import { addNewDetail, addNewExpense } from "./functions";
import firebase from "firebase/app";
import "firebase/firestore";
import { useRouter } from "next/router";
import EditButton from "components-ui/Molecules/EditButton";
import { FormContext } from "pages/journeys/[journeyID]";
import StyledField from "components-ui/Molecules/InputField";

type Props = {
    expenses: Expense[];
};

const collectionRef = firebase.firestore().collection("journeys");

const EditJourney: React.FC<Props> = ({ expenses }) => {
    const router = useRouter();
    const { isEditModeEnabled, setIsEditModeEnabled } = useContext(FormContext);
    const journeyID = router.query.journeyID as string;

    const docRef = collectionRef.doc(journeyID);

    const updateDatabase = async (values: Expense[]) => {
        const document = await docRef.get();
        const documentData = document.data();
        const copy = documentData ?? {};
        copy.expenses = values;
        docRef.set(copy);
        setIsEditModeEnabled(!isEditModeEnabled);
    };

    return (
        <Wrapper>
            <Formik
                initialValues={expenses}
                onSubmit={(values: Expense[]) => updateDatabase(values)}
                validationSchema={validationSchema}
            >
                {({ values, setValues }) => (
                    <div>
                        <Button
                            onClick={() => {
                                setValues([...addNewExpense(values)]);
                            }}
                            type="button"
                        >
                            New category
                        </Button>
                        <Form>
                            {values.map((expense: Expense, i: number) => (
                                <Grid key={i}>
                                    <StyledField
                                        name={`[${i}].title`}
                                        type="input"
                                    />

                                    {expense.details.map(
                                        (detail, j: number) => (
                                            <EditDetailsCard
                                                key={`${i}-${j}`}
                                                detail={detail}
                                                values={values}
                                                x={[i, j]}
                                                setValues={setValues}
                                            />
                                        )
                                    )}

                                    <Button
                                        onClick={() =>
                                            setValues([
                                                ...addNewDetail(values, i),
                                            ])
                                        }
                                        type="button"
                                    >
                                        New detail
                                    </Button>
                                </Grid>
                            ))}
                            <EditButton type="submit" isGrayedOut={false} />
                        </Form>
                    </div>
                )}
            </Formik>
        </Wrapper>
    );
};

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 19rem);
    gap: 2rem;
    margin-bottom: 10rem;
`;

const Wrapper = styled.div``;

export default EditJourney;
