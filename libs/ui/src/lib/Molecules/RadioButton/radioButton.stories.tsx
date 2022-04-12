import { Story, Meta } from "@storybook/react";
import { Form, Formik } from "formik";

import {
    RadioButton as RadioButtonComponent,
    RadioButtonProps,
} from "./radioButton";

export default {
    component: RadioButtonComponent,
    title: "Molecules/Radio Button",
    argTypes: {
        position: {
            options: ["left", "center", "right"],
            control: { type: "radio" },
        },
    },
} as Meta;

// Since this component is using a formik Field component we need to wrap it in a Formik component
export const RadioButton: Story<RadioButtonProps> = (args) => (
    <Formik
        initialValues={{}}
        onSubmit={() => {
            return;
        }}
    >
        <Form>
            <RadioButtonComponent name="name" {...args} />
        </Form>
    </Formik>
);

RadioButton.args = {
    value: "Value",
    position: "left",
    checked: false,
    error: false,
};
