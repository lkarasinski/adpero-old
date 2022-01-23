import * as React from 'react';
import InputField from 'components-ui/Molecules/InputField';
import { Form, Formik } from 'formik';
import { Detail, Expense } from 'utils/interfaces';
import Card from 'components-ui/Atoms/Card';

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
            {({ values }) => {
                return (
                    <Form>
                        <InputField label="Title" error={''} name="title" />
                        {expenseValues.details.map(
                            (detail: Detail, index: number) => (
                                <Card key={detail.id}>
                                    <InputField
                                        label="Type"
                                        error={''}
                                        name={`details[${index}].type`}
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
                                    <InputField
                                        label="Currency"
                                        error={''}
                                        name={`details[${index}].currency`}
                                    />
                                </Card>
                            )
                        )}

                        <button type="submit">Submit changes</button>

                        <pre>{JSON.stringify(values, null, 2)}</pre>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default EditJourneyExpeneses;
