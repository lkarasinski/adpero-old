import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import "../../../styles/globals.css";

import JourneyInfoComponent from "./index";

export default {
    title: "Organisms/Journey Info",
    component: JourneyInfoComponent,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof JourneyInfoComponent>;

export const JourneyInfo: ComponentStory<typeof JourneyInfoComponent> = (
    args
) => <JourneyInfoComponent {...args} />;
