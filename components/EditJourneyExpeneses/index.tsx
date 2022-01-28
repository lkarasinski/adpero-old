import * as React from "react";
import TextField from "components-ui/Molecules/TextField";
import { Field, Form, Formik } from "formik";
import { Detail, Expense } from "utils/interfaces";
import Card from "components-ui/Atoms/Card";
import RadioGroup from "components-ui/Molecules/RadioGroup";
import styled from "styled-components";
import Button from "components-ui/Atoms/Button";
import Heading from "components-ui/Atoms/Heading";
import { getEmptyDetail } from "utils/constants";
import { DatePicker } from "formik-mui-lab";

type Props = {
    expenseValues: Expense;
    submitChanges: (values: Expense) => Promise<void>;
    removeCategory: () => Promise<void>;
};

type SetValuesType = (
    values: React.SetStateAction<Expense>,
    shouldValidate?: boolean | undefined
) => void;

const addNewDetail = (values: Expense, setValues: SetValuesType) => {
    if (values.details) {
        setValues({
            ...values,
            details: [...values.details, getEmptyDetail()],
        });
    }
};

const removeDetail = (
    values: Expense,
    index: string,
    setValues: SetValuesType
) => {
    const newValues = values.details.filter(
        (detail: Detail) => detail.id !== index
    );
    setValues({ ...values, details: newValues });
    return;
};

const EditJourneyExpeneses: React.FC<Props> = ({
    expenseValues,
    submitChanges,
    removeCategory,
}) => {
    return (
        <Formik
            enableReinitialize
            initialValues={expenseValues}
            onSubmit={submitChanges}
        >
            {({ values, isSubmitting, setValues }) => {
                return (
                    <StyledForm>
                        <Heading>{values.title}</Heading>
                        <Button type="button" onClick={removeCategory}>
                            Remove category
                        </Button>
                        <StyledInput label="Title" error={""} name="title" />
                        <Button
                            type="button"
                            onClick={() => addNewDetail(values, setValues)}
                        >
                            Add new detail
                        </Button>
                        <CardGrid>
                            {values.details.map(
                                (detail: Detail, index: number) => {
                                    const currentType =
                                        values.details[index]?.type;
                                    return (
                                        <StyledCard key={detail.id}>
                                            <Button
                                                type="button"
                                                onClick={() =>
                                                    removeDetail(
                                                        values,
                                                        detail.id,
                                                        setValues
                                                    )
                                                }
                                            >
                                                Remove detail
                                            </Button>
                                            <RadioGroup
                                                currentType={currentType}
                                                name={`details[${index}]`}
                                                label="Type"
                                            />
                                            <TextField
                                                label="Label"
                                                error={""}
                                                name={`details[${index}].label`}
                                            />
                                            {values.details[index]?.type ===
                                            "Date" ? (
                                                <Field
                                                    component={DatePicker}
                                                    name={`details[${index}].value`}
                                                    label={"Day of departure"}
                                                    error={""}
                                                />
                                            ) : (
                                                <TextField
                                                    label="Value"
                                                    error={""}
                                                    name={`details[${index}].value`}
                                                />
                                            )}
                                            {currentType === "Price" && (
                                                <TextField
                                                    label="Currency"
                                                    error={""}
                                                    name={`details[${index}].currency`}
                                                />
                                            )}
                                        </StyledCard>
                                    );
                                }
                            )}
                        </CardGrid>
                        <Button
                            color={isSubmitting ? "gray" : "primary"}
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Submit changes
                        </Button>
                    </StyledForm>
                );
            }}
        </Formik>
    );
};

const StyledForm = styled(Form)`
    margin-top: 2rem;
`;

const StyledInput = styled(TextField)`
    width: 25rem;
`;

const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 19rem);
    gap: 2rem;
    margin: 2rem 0;
`;

const StyledCard = styled(Card)`
    width: max-content;
    gap: 1rem;
    display: flex;
    flex-direction: column;
`;

export default EditJourneyExpeneses;
