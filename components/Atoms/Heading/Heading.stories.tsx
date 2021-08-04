import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HeadingComponent from "./index";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import "../../../styles/globals.css";

export default {
    title: "Atoms/Heading",
    component: HeadingComponent,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof HeadingComponent>;

export const Heading: ComponentStory<typeof HeadingComponent> = (args) => (
    <HeadingComponent {...args} />
);

Heading.args = {
    children: "Heading",
};
