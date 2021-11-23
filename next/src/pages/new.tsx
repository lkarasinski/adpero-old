import Button from "components-ui/Atoms/Button";
import DatePickerField from "components-ui/Atoms/Datepicker";
import InputField from "components-ui/Molecules/InputField";
import firebase from "firebase";
import { Form, Formik } from "formik";
import useNewJourney from "hooks/useNewJourney";
import {
    withAuthUserTokenSSR,
    withAuthUser,
    useAuthUser,
} from "next-firebase-auth";
import React from "react";
import { Journey } from "utils/interfaces";

const NewJourney: React.FC = () => {
    const auth = useAuthUser();
    const [createJoruney] = useNewJourney();

    const initialValues: any = {
        author: auth.email ?? "",
        createdAt: new firebase.firestore.Timestamp(0, 0),
        editors: [],
        expenses: [],
        name: "",
        polls: [],
        users: [],
        startDate: new Date(),
        endDate: new firebase.firestore.Timestamp(0, 0),
        id: "",
    };

    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => createJoruney(values)}
            >
                {() => (
                    <Form>
                        <div>
                            Witam
                            <InputField type="input" name="name" />
                            <Button type="submit" isPrimary={true}>
                                Create
                            </Button>
                            <DatePickerField name="startDate" />
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(NewJourney);
