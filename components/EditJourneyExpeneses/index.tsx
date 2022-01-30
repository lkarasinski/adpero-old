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
import RemoveDetailButton from "./RemoveDetailButton";
import Grid from "components-ui/Atoms/Grid";
import useMobile from "hooks/useMobile";

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
    const isMobile = useMobile();
    return (
        <Formik
            enableReinitialize
            initialValues={expenseValues}
            onSubmit={submitChanges}
        >
            {({ values, isSubmitting, setValues }) => {
                return (
                    <StyledForm isMobile={isMobile} autoComplete="off">
                        <TopContainer isMobile={isMobile}>
                            <Heading>{values.title}</Heading>
                            {isMobile ? null : (
                                <Button
                                    color="red"
                                    type="button"
                                    onClick={removeCategory}
                                >
                                    Remove category
                                </Button>
                            )}
                        </TopContainer>
                        {isMobile ? (
                            <StyledButton
                                color="red"
                                type="button"
                                onClick={removeCategory}
                                style={{ marginBottom: "2rem" }}
                            >
                                Remove category
                            </StyledButton>
                        ) : null}

                        <StyledInput label="Title" error={""} name="title" />

                        <CardGrid isMobile={isMobile}>
                            {values.details.map(
                                (detail: Detail, index: number) => {
                                    const currentType =
                                        values.details[index]?.type;
                                    return (
                                        <StyledCard key={detail.id}>
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
                                                    label={"Value"}
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
                                            <RemoveDetailButton
                                                removeDetail={() =>
                                                    removeDetail(
                                                        values,
                                                        detail.id,
                                                        setValues
                                                    )
                                                }
                                            />
                                        </StyledCard>
                                    );
                                }
                            )}
                            <AddNewDetailContainer isMobile={isMobile}>
                                <StyledButton
                                    type="button"
                                    color="primary"
                                    onClick={() =>
                                        addNewDetail(values, setValues)
                                    }
                                >
                                    Add new detail
                                </StyledButton>
                            </AddNewDetailContainer>
                        </CardGrid>
                        <Button
                            type="submit"
                            color={isSubmitting ? "gray" : "green"}
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

const StyledButton = styled(Button)`
    width: 100%;
`;

const AddNewDetailContainer = styled.div<{ isMobile: boolean }>`
    ${({ isMobile }) =>
        isMobile ? null : "display: grid; place-items: center;"}
`;

const TopContainer = styled.div<{ isMobile: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: ${({ isMobile }) => (isMobile ? "0" : "2rem")};
`;

const StyledForm = styled(Form)<{ isMobile: boolean }>`
    ${({ isMobile }) =>
        isMobile
            ? `display: flex;
        flex-direction: column; margin-bottom: 4rem;`
            : null}
`;

const StyledInput = styled(TextField)`
    max-width: 25rem;
`;

const CardGrid = styled(Grid)`
    margin: 2rem 0;
`;

const StyledCard = styled(Card)`
    min-width: max-content;
    gap: 1rem;
    display: flex;
    flex-direction: column;
`;

export default EditJourneyExpeneses;
