import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import "../../../styles/globals.css";

import SidePanelComponent from "./index";

export default {
    title: "Organisms/Side Panel",
    component: SidePanelComponent,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof SidePanelComponent>;

export const SidePanel: ComponentStory<typeof SidePanelComponent> = (args) => (
    <SidePanelComponent {...args} />
);
