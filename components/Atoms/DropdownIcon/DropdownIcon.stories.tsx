import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import "../../../styles/globals.css";

import DropdownIcon from "./index";

export default {
    title: "Atoms/Dropdown Icon",
    component: DropdownIcon,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof DropdownIcon>;

const Template: ComponentStory<typeof DropdownIcon> = (args) => (
    <DropdownIcon {...args} />
);

export const Primary = Template.bind({});
