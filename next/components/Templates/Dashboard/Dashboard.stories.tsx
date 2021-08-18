import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import "../../../styles/globals.css";

import DashboardComponent from "./index";

const polls = [
    { label: "Apartement", detail: "Poznań" },
    { label: "Apartement", detail: "Poznań" },
    { label: "Apartement", detail: "Poznań" },
];

const recentlyChanged = [
    {
        label: "Poznań",
        details: ["Apartament", "Transport", "Komunikacja Miejska"],
    },
    {
        label: "Poznań",
        details: ["Apartament", "Transport", "Komunikacja Miejska"],
    },
    {
        label: "Poznań",
        details: ["Apartament", "Transport", "Komunikacja Miejska"],
    },
    {
        label: "Poznań",
        details: ["Apartament", "Transport", "Komunikacja Miejska"],
    },
];

const journeys = [
    {
        label: "Poznań",
        details: ["Apartament", "Transport", "Komunikacja Miejska"],
    },
    {
        label: "Poznań",
        details: ["Apartament", "Transport", "Komunikacja Miejska"],
    },
    {
        label: "Poznań",
        details: ["Apartament", "Transport", "Komunikacja Miejska"],
    },
    {
        label: "Poznań",
        details: ["Apartament", "Transport", "Komunikacja Miejska"],
    },
];

const props = {
    polls: polls,
    journeys: journeys,
    recentlyChangedJourneys: recentlyChanged,
};

export default {
    title: "Templates/Dashboard",
    component: DashboardComponent,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof DashboardComponent>;

export const Dashboard: ComponentStory<typeof DashboardComponent> = (args) => (
    <DashboardComponent {...props} {...args} />
);
