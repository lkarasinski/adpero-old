import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DetailsPanelComponent from "./index";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import "../../../styles/globals.css";

export default {
    title: "Organisms/Details Panel",
    component: DetailsPanelComponent,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof DetailsPanelComponent>;

export const DetailsPanel: ComponentStory<typeof DetailsPanelComponent> = (
    args
) => <DetailsPanelComponent {...args} />;
