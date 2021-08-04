import React from "react";
import ActivePollsPanelComponent from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "utils/theme";
import "styles/globals.css";

export default {
    title: "Organisms/Active Polls Panel",
    component: ActivePollsPanelComponent,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof ActivePollsPanelComponent>;

export const ActivePollsPanel: ComponentStory<
    typeof ActivePollsPanelComponent
> = (args) => <ActivePollsPanelComponent {...args} />;
