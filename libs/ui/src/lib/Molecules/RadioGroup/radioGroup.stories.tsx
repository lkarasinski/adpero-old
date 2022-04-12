import { Story, Meta } from "@storybook/react";
import { Form, Formik } from "formik";

import {
    RadioGroup as RadioGroupComponent,
    RadioGroupProps,
} from "./radioGroup";

export default {
    component: RadioGroupComponent,
    title: "Molecules/Radio Group",
    argTypes: {
        name: { table: { disable: true } },
    },
} as Meta;

// Since this component is using a formik Field component we need to wrap it in a Formik component
export const RadioGroup: Story<RadioGroupProps> = (args) => (
    <Formik
        initialValues={{
            radioGroup: {
                type: "Price" as "Price" | "Text" | "Date" | "Address" | "",
            },
        }}
        onSubmit={() => {
            return;
        }}
    >
        {(props) => (
            <Form>
                <RadioGroupComponent
                    {...args}
                    name="radioGroup"
                    currentType={props.values.radioGroup.type}
                />
            </Form>
        )}
    </Formik>
);

RadioGroup.args = {
    label: "Label",
    error: "",
};
