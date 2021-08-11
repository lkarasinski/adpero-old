import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import "../../../styles/globals.css";

import LogoComponent from "./index";

export default {
    title: "Atoms/Logo",
    component: LogoComponent,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof LogoComponent>;

export const Logo: ComponentStory<typeof LogoComponent> = (args) => (
    <LogoComponent {...args} />
);
