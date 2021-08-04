import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import "../../../styles/globals.css";

import DropdownIconComponent from "./index";

export default {
    title: "Atoms/Dropdown Icon",
    component: DropdownIconComponent,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof DropdownIconComponent>;

export const DropdownIcon: ComponentStory<typeof DropdownIconComponent> = (
    args
) => <DropdownIconComponent {...args} />;
