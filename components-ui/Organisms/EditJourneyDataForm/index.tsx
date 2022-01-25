import Button from 'components-ui/Atoms/Button';
import Card from 'components-ui/Atoms/Card';
import Label from 'components-ui/Atoms/Label';
import InputField from 'components-ui/Molecules/InputField';
import { Form } from 'formik';
import React from 'react';
import styled from 'styled-components';

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
        <StyledForm>
            <StyledCard>
                <StyledLabel isAccent>Journey data</StyledLabel>
                <InputField
                    error={errors.name}
                    label={'Journey Name'}
                    name={'name'}
                />
                <DatePickerContainer>
                    <div>
                        <InputField
                            label={'Day of departure'}
                            name={'startDate'}
                            error={errors.startDate}
                            isDate
                        />
                    </div>
                    <div>
                        <InputField
                            label={'Day of return'}
                            name={'endDate'}
                            error={errors.endDate}
                            isDate
                        />
                    </div>
                </DatePickerContainer>
                <div>
                    <InputField
                        error={errors.cost?.currency ?? ''}
                        label={'Currency'}
                        name={'cost.currency'}
                    />
                </div>
                <div>
                    <Button type="submit" disabled={isSubmitting}>
                        {buttonText}
                    </Button>
                </div>
            </StyledCard>
        </StyledForm>
    );
};

const StyledForm = styled(Form)`
    max-width: 20rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const StyledLabel = styled(Label)`
    margin-bottom: 1rem;
`;

const DatePickerContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

const StyledCard = styled(Card)`
    max-width: 20rem;
    height: min-content;
`;

export default EditJourneyDataForm;
