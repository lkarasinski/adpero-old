import Button from "components-ui/Atoms/Button";
import DatePickerField from "components-ui/Atoms/Datepicker";
import Heading from "components-ui/Atoms/Heading";
import Text from "components-ui/Atoms/Text";
import InputField from "components-ui/Molecules/InputField";
import { Form, Formik } from "formik";
import useNewJourney from "hooks/useNewJourney";
import {
    withAuthUserTokenSSR,
    withAuthUser,
    useAuthUser,
} from "next-firebase-auth";
import React, { useState } from "react";
import styled from "styled-components";
import * as yup from "yup";

const NewJourney: React.FC = () => {
    const auth = useAuthUser();
    const [createJoruney] = useNewJourney();
    const [isCreating, setIsCreating] = useState(false);

    const initialValues: any = {
        author: auth.email ?? "",
        createdAt: new Date(),
        editors: [],
        expenses: [],
        name: "",
        polls: [],
        users: [auth.email],
        startDate: new Date(),
        endDate: new Date(),
        id: "",
        lastEdited: new Date(),
        cost: { value: 0, currency: "EUR" },
    };

    return (
        <>
            <Heading>New journey</Heading>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    setIsCreating(true);
                    createJoruney(values);
                }}
            >
                {({ errors }) => {
                    const typedErrors = errors as Errors;
                    return (
                        <StyledForm>
                            <div>
                                <Text isSmall>Journey name</Text>
                                <InputField type="input" name="name" />
                                {typedErrors.name && (
                                    <Text color="red" isSmall>
                                        {typedErrors.name}
                                    </Text>
                                )}
                            </div>
                            <DatePickerContainer>
                                <div>
                                    <Text isSmall>Day of departure</Text>
                                    <DatePickerField name="startDate" />
                                    {typedErrors.startDate && (
                                        <Text color="red" isSmall>
                                            {typedErrors.name}
                                        </Text>
                                    )}
                                </div>
                                <div>
                                    <Text isSmall>Day of return</Text>
                                    <DatePickerField name="endDate" />
                                    {typedErrors.endDate && (
                                        <Text color="red" isSmall>
                                            {typedErrors.name}
                                        </Text>
                                    )}
                                </div>
                            </DatePickerContainer>
                            <div>
                                <Text isSmall>Currency</Text>
                                <InputField type="input" name="cost.currency" />
                                {typedErrors.cost && (
                                    <Text color="red" isSmall>
                                        {typedErrors.cost.currency}
                                    </Text>
                                )}
                            </div>
                            <Button
                                disabled={isCreating}
                                type="submit"
                                isPrimary={true}
                            >
                                Create
                            </Button>
                        </StyledForm>
                    );
                }}
            </Formik>
        </>
    );
};

type Errors = {
    name: string;
    startDate: string;
    endDate: string;
    cost: { value: string; currency: string };
};

const DatePickerContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

const StyledForm = styled(Form)`
    max-width: 20rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    startDate: yup.date().required("Departure date is required"),
    endDate: yup.date().required("Return date is required"),
    cost: yup.object({
        value: yup.number(),
        currency: yup
            .string()
            .test(
                "len",
                "Enter currency code. For example: USD, GBP",
                (val) => val?.length === 3
            ),
    }),
});

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(NewJourney);
