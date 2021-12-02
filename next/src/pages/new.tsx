import Button from "components-ui/Atoms/Button";
import DatePickerField from "components-ui/Atoms/Datepicker";
import Heading from "components-ui/Atoms/Heading";
import InputField from "components-ui/Molecules/InputField";
import { Form, Formik } from "formik";
import useNewJourney from "hooks/useNewJourney";
import {
    withAuthUserTokenSSR,
    withAuthUser,
    useAuthUser,
} from "next-firebase-auth";
import React from "react";
import styled from "styled-components";

const StyledForm = styled(Form)`
    max-width: 20rem;
`;

const NewJourney: React.FC = () => {
    const auth = useAuthUser();
    const [createJoruney] = useNewJourney();

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
                onSubmit={(values) => createJoruney(values)}
            >
                {() => (
                    <StyledForm>
                        <div>
                            <InputField type="input" name="name" />
                            <DatePickerContainer>
                                <DatePickerField name="startDate" />
                                <DatePickerField name="endDate" />
                            </DatePickerContainer>
                            <InputField type="input" name="cost.currency" />
                        </div>
                        <Button type="submit" isPrimary={true}>
                            Create
                        </Button>
                    </StyledForm>
                )}
            </Formik>
        </>
    );
};

const DatePickerContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(NewJourney);
