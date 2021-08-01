import React from "react";
import CardsPanel from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "utils/theme";
import "styles/globals.css";

export default {
    title: "Organisms/Cards Panel",
    component: CardsPanel,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof CardsPanel>;

const Template: ComponentStory<typeof CardsPanel> = (args) => (
    <CardsPanel {...args} />
);

const pollsValues = [
    {
        label: "Poznań",
        detail: "Apartament",
    },
    {
        label: "Poznań",
        detail: "Apartament",
    },
    {
        label: "Poznań",
        detail: "Apartament",
    },
    {
        label: "Poznań",
        detail: "Apartament",
    },
];

const journeysValues = [
    {
        label: "Poznań",
        details: ["Apartament", "Transport", "Bieniu"],
    },
    {
        label: "Poznań",
        details: ["Apartament", "Transport", "Siedzi"],
    },
    {
        label: "Poznań",
        details: ["Apartament", "Transport", "W cieniu"],
    },
];

export const Journeys = Template.bind({});
Journeys.args = {
    elements: journeysValues,
    label: "Recently changed journeys",
};
export const Polls = Template.bind({});
Polls.args = {
    elements: pollsValues,
    label: "Polls you haven't voted in yet",
};
