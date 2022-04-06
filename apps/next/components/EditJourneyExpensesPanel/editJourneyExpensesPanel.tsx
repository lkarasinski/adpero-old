import * as React from "react";
import styled from "styled-components";
import { Form, Formik } from "formik";
import { useMobile } from "@adpero/hooks";
import { Detail, Expense } from "@adpero/interfaces";
import { getEmptyDetail } from "@adpero/functions";
import { InputField, Button, Heading, Grid } from "@adpero/ui";
import validationSchema from "./validation";
import { dashboardTheme } from "@adpero/themes";
import EditDetailsCard from "./editDetailsCard";
import { mobileScreenSize } from "@adpero/constants";
import { RemoveCategoryButton } from "./removeCategoryButton";

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

export const EditJourneyExpensesPanel: React.FC<Props> = ({
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
            validationSchema={validationSchema}
        >
            {({ values, isSubmitting, setValues, errors }) => {
                return (
                    <>
                        <StyledForm autoComplete="off">
                            <TopContainer>
                                <Heading>{values.title}</Heading>
                                {isMobile ? null : (
                                    <RemoveCategoryButton
                                        removeCategory={removeCategory}
                                    />
                                )}
                            </TopContainer>
                            {isMobile ? (
                                <RemoveCategoryButton
                                    removeCategory={removeCategory}
                                />
                            ) : null}

                            <TitleInputContainer>
                                <InputField
                                    label="Title"
                                    error={errors.title ?? ""}
                                    name="title"
                                    type="text"
                                />
                            </TitleInputContainer>

                            <CardGrid>
                                {values.details.map(
                                    (detail: Detail, index: number) => {
                                        type DetailErrors = {
                                            type: string;
                                            label: string;
                                            value: string;
                                            currency: string;
                                        };
                                        const currentErrors = errors?.details?.[
                                            index
                                        ] as DetailErrors;
                                        const currentType =
                                            values.details[index]?.type;
                                        return (
                                            <EditDetailsCard
                                                index={index}
                                                detail={detail}
                                                removeDetail={() =>
                                                    removeDetail(
                                                        values,
                                                        detail.id,
                                                        setValues
                                                    )
                                                }
                                                currentErrors={currentErrors}
                                                currentType={currentType}
                                                values={values}
                                                key={detail.id}
                                            />
                                        );
                                    }
                                )}
                                <AddNewDetailContainer>
                                    <StyledButton
                                        type="button"
                                        color={
                                            dashboardTheme.colors.primary
                                                .regular
                                        }
                                        onClick={() =>
                                            addNewDetail(values, setValues)
                                        }
                                    >
                                        Add new detail
                                    </StyledButton>
                                </AddNewDetailContainer>
                            </CardGrid>
                            <SubmitButton
                                type="submit"
                                color={
                                    isSubmitting
                                        ? dashboardTheme.colors.gray.dark
                                        : dashboardTheme.colors.green.regular
                                }
                                disabled={isSubmitting}
                            >
                                Submit changes
                            </SubmitButton>
                        </StyledForm>
                    </>
                );
            }}
        </Formik>
    );
};

const SubmitButton = styled(Button)`
    width: 313px;
    @media (max-width: ${mobileScreenSize}px) {
        width: 100%;
    }
`;

const StyledButton = styled(Button)`
    width: 100%;
`;

const TitleInputContainer = styled.div`
    max-width: 40rem;
`;

const AddNewDetailContainer = styled.div`
    @media (min-width: ${mobileScreenSize}) {
        display: grid;
        place-items: center;
    }
`;

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: ${mobileScreenSize}) {
        margin-right: 2rem;
    }
`;

const StyledForm = styled(Form)`
    @media (max-width: ${mobileScreenSize}) {
        display: flex;
        flex-direction: column;
        margin-bottom: 4rem;
    }
`;

const CardGrid = styled(Grid)`
    margin: 2rem 0;
`;
