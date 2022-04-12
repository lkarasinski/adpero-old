import { Story, Meta } from "@storybook/react";
import { Formik } from "formik";

import {
    EditJourneyDataForm as EditJourneyDataFormComponent,
    EditJourneyDataFormProps,
} from "./editJourneyDataForm";

export default {
    component: EditJourneyDataFormComponent,
    title: "Organisms/Edit Journey Data Form",
    argTypes: {
        errors: {
            table: {
                disable: true,
            },
        },
    },
} as Meta;

export const EditJourneyDataForm: Story<EditJourneyDataFormProps> = (args) => (
    <Formik
        initialValues={{
            name: "",
            startDate: "",
            endDate: "",
            cost: {
                value: "",
                currency: "",
            },
        }}
        onSubmit={() => {
            return;
        }}
    >
        <EditJourneyDataFormComponent {...args} />
    </Formik>
);

EditJourneyDataForm.args = {
    errors: {
        name: "",
        startDate: "",
        endDate: "",
        cost: {
            value: "",
            currency: "",
        },
    },
    buttonText: "Create journey",
    isSubmitting: false,
};
