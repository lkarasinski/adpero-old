import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import "../../../styles/globals.css";

import SummaryPanelComponent from "./index";

export default {
    title: "Molecules/Summary Panel",
    component: SummaryPanelComponent,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof SummaryPanelComponent>;

export const SummaryPanel: ComponentStory<typeof SummaryPanelComponent> = (
    args
) => <SummaryPanelComponent {...args} />;

SummaryPanel.args = {
    totalCost: { value: 90, currency: "USD" },
};
