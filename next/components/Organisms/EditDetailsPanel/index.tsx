import Heading from "components/Atoms/Heading";
import Label from "components/Atoms/Label";
import EditDetailsCard from "components/Molecules/EditDetailsCard";
import React from "react";
import styled from "styled-components";
import { Expense } from "utils/interfaces";
import { Form, Formik, FormikErrors, Field } from "formik";
import * as yup from "yup";

const detailsSchema = {
    label: yup.string().required("Label is required").max(24),
    type: yup.string().required("Type is required"),
    value: yup
        .mixed()
        .required("Value is required")
        .when("type", {
            is: "Price",
            then: yup
                .number()
                .typeError("Enter a number. For decimals use a dot "),
            otherwise: yup.string(),
        }),
    currency: yup.string().when("type", {
        is: "Price",
        then: yup
            .string()
            .required("Currency is required")
            .test(
                "len",
                "Enter currency code. For example: USD, GBP",
                (val) => val?.length === 3
            ),
    }),
};

const validationSchema = yup.array().of(
    yup.object({
        title: yup.string().required("Title is required").max(24),
        details: yup.array().of(yup.object().shape(detailsSchema)),
    })
);

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 19rem);
    gap: 2rem;
`;

const Wrapper = styled.div``;
const HeadingContainer = styled.div`
    margin: 2rem;
`;

interface Props {
    expenses: Expense[];
}

const DetailsPanel: React.FC<Props> = ({ expenses }) => {
    const updateDatabase = (values: typeof initialValues) => {
        console.log(values);
    };
    console.log(expenses);
    const initialValues = expenses ?? [
        {
            title: "Initial",
            details: [{ label: "", value: "", type: "", currency: "" }],
        },
    ];

    return (
        <Wrapper>
            <Formik
                initialValues={expenses}
                onSubmit={(values: typeof initialValues) =>
                    updateDatabase(values)
                }
                validationSchema={validationSchema}
            >
                {({ values, setValues, errors }) => {
                    return (
                        <div>
                            <Form>
                                {/* CHANGE TITLE OF EXPENSE */}
                                {values.map((expense: Expense, i: number) => {
                                    return (
                                        <>
                                            <Field
                                                type={"input"}
                                                name={`[${i}].title`}
                                                key={i}
                                            />
                                            {expense.details.map(
                                                (_, j: number) => {
                                                    return (
                                                        <div key={j}>
                                                            <Field
                                                                type={"input"}
                                                                name={`[${i}].details[${j}].label`}
                                                            />
                                                            <Field
                                                                type={"input"}
                                                                name={`[${i}].details[${j}].value`}
                                                            />
                                                            <Field
                                                                type={"input"}
                                                                name={`[${i}].details[${j}].type`}
                                                            />
                                                            <Field
                                                                type={"input"}
                                                                name={`[${i}].details[${j}].currency`}
                                                            />
                                                        </div>
                                                        // <DetailFields
                                                        //     key={j}
                                                        //     values={values}
                                                        //     removeDetail={removeDetail}
                                                        //     i={i}
                                                        //     j={j}
                                                        //     setValues={setValues}
                                                        //     errors={errors}
                                                        // />
                                                    );
                                                }
                                            )}
                                        </>
                                    );
                                })}
                                {/* CARDS WITH LABEL VALUE TYPE AND CURRENCY */}
                            </Form>
                            <pre>{JSON.stringify(values, null, 2)}</pre>
                        </div>
                    );
                }}
            </Formik>

            {/* <HeadingContainer>
                <Label isAccent>More Details</Label>
            </HeadingContainer>
            {expenses &&
                expenses.map((expense, i: number) => (
                    <>
                        <Heading>{expense.title}</Heading>
                        <Grid>
                            {expense.details.map((detail, j: number) => (
                                <EditDetailsCard
                                    key={`${i}-${j}`}
                                    {...detail}
                                />
                            ))}
                        </Grid>
                    </>
                ))} */}
        </Wrapper>
    );
};

export default DetailsPanel;
