import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Heading from "./index";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import "../../../styles/globals.css";

export default {
    title: "Atoms/Heading",
    component: Heading,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
    <Heading {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    children: "Heading",
};
