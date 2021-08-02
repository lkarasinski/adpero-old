import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import "../../../styles/globals.css";

import Dashboard from "./index";

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
    component: Dashboard,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof Dashboard>;

const Template: ComponentStory<typeof Dashboard> = (args) => (
    <Dashboard {...props} {...args} />
);

export const Primary = Template.bind({});
