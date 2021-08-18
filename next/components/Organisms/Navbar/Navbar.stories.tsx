import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import "../../../styles/globals.css";

import NavbarComponent from "./index";

export default {
    title: "Organisms/Navbar",
    component: NavbarComponent,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof NavbarComponent>;

export const Navbar: ComponentStory<typeof NavbarComponent> = (args) => (
    <NavbarComponent {...args} />
);
