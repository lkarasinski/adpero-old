import Button from "components-ui/Atoms/Button";
import Heading from "components-ui/Atoms/Heading";
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
import EditJourneyDataPanel from "components-ui/Organisms/EditJourneyDataPanel";

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
                            <EditJourneyDataPanel errors={typedErrors} />
                            <Button
                                disabled={isCreating}
                                type="submit"
                                color="primary"
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
