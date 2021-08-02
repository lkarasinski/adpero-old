import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import "../../../styles/globals.css";

import UserPanelDropdown from "./index";

export default {
    title: "Molecules/User Panel Dropdown",
    component: UserPanelDropdown,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof UserPanelDropdown>;

const Template: ComponentStory<typeof UserPanelDropdown> = (args) => (
    <UserPanelDropdown {...args} />
);

export const Primary = Template.bind({
    photoURL:
        "https://lh3.googleusercontent.com/a-/AOh14GjDs9kIQUv1-stNL0gtEi-MFNXoYMhvK2x5SYuv=s96-c",
});
