import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Label from "./index";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import "../../../styles/globals.css";

export default {
    title: "Atoms/Label",
    component: Label,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: "Label",
    isAccent: false,
};
export const Accent = Template.bind({});
Accent.args = {
    children: "Label",
    isAccent: true,
};
