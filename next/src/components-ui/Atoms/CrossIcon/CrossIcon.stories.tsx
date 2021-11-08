import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import "../../../styles/globals.css";

import CrossIconComponent from "./index";

export default {
    title: "Atoms/Cross Icon",
    component: CrossIconComponent,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof CrossIconComponent>;

export const CrossIcon: ComponentStory<typeof CrossIconComponent> = (args) => (
    <CrossIconComponent {...args} />
);
