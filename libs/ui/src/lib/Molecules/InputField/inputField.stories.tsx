import { Story, Meta } from "@storybook/react";
import { Form, Formik } from "formik";

import {
    InputField as InputFieldComponent,
    InputFieldProps,
} from "./inputField";

export default {
    component: InputFieldComponent,
    title: "Molecules/Input Field",
    argTypes: {
        name: {
            table: { disable: true },
        },
    },
} as Meta;

// Since this component is using a formik Field component we need to wrap it in a Formik component
export const InputField: Story<InputFieldProps> = (args) => (
    <Formik
        initialValues={{}}
        onSubmit={() => {
            return;
        }}
    >
        <Form>
            <InputFieldComponent {...args} />
        </Form>
    </Formik>
);

InputField.args = {
    type: "text",
    label: "Label",
    placeholder: "Placeholder",
    error: "",
    name: "Text Field",
};
