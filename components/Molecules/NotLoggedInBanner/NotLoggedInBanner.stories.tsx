import React from "react";
import NotLoggedInBanner from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import "../../../styles/globals.css";

export default {
    title: "Molecules/Not Logged In Banner",
    component: NotLoggedInBanner,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof NotLoggedInBanner>;

const Template: ComponentStory<typeof NotLoggedInBanner> = (args) => (
    <NotLoggedInBanner {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
