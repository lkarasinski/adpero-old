import React from "react";
import JourneyCardComponent from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import "../../../styles/globals.css";

export default {
    title: "Molecules/Journey Card",
    component: JourneyCardComponent,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof JourneyCardComponent>;

export const JourneyCard: ComponentStory<typeof JourneyCardComponent> = (
    args
) => <JourneyCardComponent {...args} />;

JourneyCard.args = {
    children: "Label",
    label: "Poznań",
    details: ["Apartament", "Transport"],
};
