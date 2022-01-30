import Button from "components-ui/Atoms/Button";
import Card from "components-ui/Atoms/Card";
import Label from "components-ui/Atoms/Label";
import TextField from "components-ui/Molecules/TextField";
import { Field, Form } from "formik";
import React from "react";
import styled from "styled-components";
import { DatePicker } from "formik-mui-lab";

export type Errors = {
    name: string;
    startDate: string;
    endDate: string;
    cost: { value: string; currency: string };
};

type Props = { errors: Errors; buttonText: string; isSubmitting: boolean };

const EditJourneyDataForm: React.FC<Props> = ({
    errors,
    buttonText,
    isSubmitting,
}) => {
    return (
        <Form autoComplete="off">
            <StyledCard>
                <StyledLabel isAccent>Journey data</StyledLabel>
                <TextField
                    error={errors.name}
                    label={"Journey Name"}
                    name={"name"}
                />
                <Field
                    component={DatePicker}
                    name={"startDate"}
                    label={"Day of departure"}
                    error={errors.startDate}
                />
                <Field
                    style={{ width: "100%" }}
                    component={DatePicker}
                    name={"endDate"}
                    label={"Day of return"}
                    error={errors.endDate}
                />
                <TextField
                    name={"cost.currency"}
                    error={errors.cost?.currency}
                    label={"Currency"}
                />
                <ButtonContainer>
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        color={isSubmitting ? "gray" : "primary"}
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
