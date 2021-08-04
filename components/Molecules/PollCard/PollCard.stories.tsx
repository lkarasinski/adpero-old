import React from "react";
import PollCardComponent from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "utils/theme";
import "styles/globals.css";

export default {
    title: "Molecules/Poll Card",
    component: PollCardComponent,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof PollCardComponent>;

const PollCard: ComponentStory<typeof PollCardComponent> = (args) => (
    <PollCardComponent {...args} />
);

export const Dashboard = PollCard.bind({});
Dashboard.args = {
    detail: "Apartament",
    label: "Poznań",
};
export const Details = PollCard.bind({});
Details.args = {
    label: "Poznań",
};

export const DetailsNotification = PollCard.bind({});
DetailsNotification.args = {
    label: "Poznań",
    dot: true,
};
