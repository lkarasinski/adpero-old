import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import "../../../styles/globals.css";

import JourneyInfo from "./index";

export default {
    title: "Organisms/Journey Info",
    component: JourneyInfo,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof JourneyInfo>;

const Template: ComponentStory<typeof JourneyInfo> = (args) => (
    <JourneyInfo {...args} />
);

export const Primary = Template.bind({});
