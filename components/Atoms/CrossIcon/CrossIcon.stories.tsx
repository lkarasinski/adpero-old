import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import "../../../styles/globals.css";

import CrossIcon from "./index";

export default {
    title: "Atoms/Cross Icon",
    component: CrossIcon,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof CrossIcon>;

const Template: ComponentStory<typeof CrossIcon> = (args) => (
    <CrossIcon {...args} />
);

export const Primary = Template.bind({});
