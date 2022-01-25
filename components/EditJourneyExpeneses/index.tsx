import * as React from 'react';
import InputField from 'components-ui/Molecules/InputField';
import { Form, Formik } from 'formik';
import { Detail, Expense } from 'utils/interfaces';
import Card from 'components-ui/Atoms/Card';
import RadioGroup from 'components-ui/Molecules/RadioGroup';
import styled from 'styled-components';
import Button from 'components-ui/Atoms/Button';
import Heading from 'components-ui/Atoms/Heading';

type Props = {
    expenseValues: Expense;
    submitChanges: (values: Expense) => Promise<void>;
};

const EditJourneyExpeneses: React.FC<Props> = ({
    expenseValues,
    submitChanges,
}) => {
    return (
        <Formik
            enableReinitialize
            initialValues={expenseValues}
            onSubmit={submitChanges}
        >
            {({ values, isSubmitting }) => {
                return (
                    <StyledForm>
                        <Heading>{values.title}</Heading>
                        <StyledInput label="Title" error={''} name="title" />
                        <CardGrid>
                            {expenseValues.details.map(
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
                                            <InputField
                                                label="Label"
                                                error={''}
                                                name={`details[${index}].label`}
                                            />
                                            <InputField
                                                label="Value"
                                                error={''}
                                                name={`details[${index}].value`}
                                            />
                                            {currentType === 'Price' && (
                                                <InputField
                                                    label="Currency"
                                                    error={''}
                                                    name={`details[${index}].currency`}
                                                />
                                            )}
                                        </StyledCard>
                                    );
                                }
                            )}
                        </CardGrid>
                        <Button
                            color={isSubmitting ? 'gray' : 'primary'}
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

const StyledInput = styled(InputField)`
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
