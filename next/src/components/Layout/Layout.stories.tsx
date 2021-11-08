import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../utils/theme";
import "../../../styles/globals.css";

import LayoutComponent from "./index";

export default {
    title: "Templates/Layout",
    component: LayoutComponent,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof LayoutComponent>;

export const Layout: ComponentStory<typeof LayoutComponent> = (args) => (
    <LayoutComponent {...args} />
);
