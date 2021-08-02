import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import "../../../styles/globals.css";

import UserIcon from "./index";

export default {
    title: "Atoms/UserIcon",
    component: UserIcon,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof UserIcon>;

const Template: ComponentStory<typeof UserIcon> = (args) => (
    <UserIcon {...args} />
);

export const Primary = Template.bind({
    photoURL:
        "https://lh3.googleusercontent.com/a-/AOh14GjDs9kIQUv1-stNL0gtEi-MFNXoYMhvK2x5SYuv=s96-c",
});
