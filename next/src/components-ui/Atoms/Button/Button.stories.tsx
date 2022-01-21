import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import "../../../styles/globals.css";

import ButtonComponent from "./index";

export default {
    title: "Atoms/Button",
    component: ButtonComponent,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof ButtonComponent>;

export const Default: ComponentStory<typeof ButtonComponent> = (args) => (
    <ButtonComponent {...args} />
);

Default.args = {
    children: "Create new journey",
    color: "gray",
    isBig: false,
};

export const Big = Default.bind({});
Big.args = {
    children: "Create new journey",
    color: "gray",
    isBig: true,
};
export const Primary = Default.bind({});
Primary.args = {
    children: "Create new journey",
    color: "gray",
    isBig: true,
};
