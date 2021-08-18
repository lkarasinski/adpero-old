import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import "../../../styles/globals.css";

import UserIconComponent from "./index";

export default {
    title: "Atoms/User Icon",
    component: UserIconComponent,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof UserIconComponent>;

export const UserIcon: ComponentStory<typeof UserIconComponent> = (args) => (
    <UserIconComponent {...args} />
);

UserIcon.args = {
    photoURL:
        "https://lh3.googleusercontent.com/a-/AOh14GjDs9kIQUv1-stNL0gtEi-MFNXoYMhvK2x5SYuv=s96-c",
};
