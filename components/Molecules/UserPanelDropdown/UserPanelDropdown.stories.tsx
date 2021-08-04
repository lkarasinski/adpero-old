import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import "../../../styles/globals.css";

import UserPanelDropdownComponent from "./index";

export default {
    title: "Molecules/User Panel Dropdown",
    component: UserPanelDropdownComponent,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof UserPanelDropdownComponent>;

export const UserPanelDropdown: ComponentStory<
    typeof UserPanelDropdownComponent
> = (args) => <UserPanelDropdownComponent {...args} />;

UserPanelDropdown.args = {
    photoURL:
        "https://lh3.googleusercontent.com/a-/AOh14GjDs9kIQUv1-stNL0gtEi-MFNXoYMhvK2x5SYuv=s96-c",
};
