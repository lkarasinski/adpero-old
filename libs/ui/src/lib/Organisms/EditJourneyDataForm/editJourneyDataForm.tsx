import React from "react";
import styled from "styled-components";
import { Form } from "formik";
import { dashboardTheme } from "@adpero/themes";
import Button from "../../Atoms/Button/button";
import Card from "../../Atoms/Card/card";
import Label from "../../Atoms/Label/label";
import InputField from "../../Molecules/InputField/inputField";

export type Errors = {
    name: string;
    startDate: string;
    endDate: string;
    cost: { value: string; currency: string };
};

export type EditJourneyDataFormProps = {
    errors: Errors;
    buttonText: string;
    isSubmitting: boolean;
};

export const EditJourneyDataForm: React.FC<EditJourneyDataFormProps> = ({
    errors,
    buttonText,
    isSubmitting,
}) => {
    return (
        <Form autoComplete="off">
            <StyledCard>
                <StyledLabel color={dashboardTheme.colors.primary.regular}>
                    Journey data
                </StyledLabel>
                <div>
                    <InputField
                        name={"name"}
                        label={"Journey Name"}
                        type={"text"}
                        error={errors.name ?? ""}
                    />
                </div>
                <div>
                    <InputField
                        name={"startDate"}
                        label={"Day of departure"}
                        type={"date"}
                        error={errors.startDate ?? ""}
                    />
                </div>
                <div>
                    <InputField
                        name={"endDate"}
                        label={"Day of return"}
                        type={"date"}
                        error={errors.endDate ?? ""}
                    />
                </div>
                <div>
                    <InputField
                        name={"cost.currency"}
                        label={"Currency"}
                        type={"text"}
                        error={errors.cost?.currency ?? ""}
                    />
                </div>
                <ButtonContainer>
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        color={
                            isSubmitting
                                ? dashboardTheme.colors.gray.dark
                                : dashboardTheme.colors.primary.regular
                        }
                    >
                        {buttonText}
                    </Button>
                </ButtonContainer>
            </StyledCard>
        </Form>
    );
};

const ButtonContainer = styled.div`
    display: grid;
    place-items: center;
    width: 100%;
`;

const StyledLabel = styled(Label)`
    margin-bottom: 1rem;
`;

const StyledCard = styled(Card)`
    height: min-content;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export default EditJourneyDataForm;
