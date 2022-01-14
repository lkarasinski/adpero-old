import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import "../../../styles/globals.css";
import DetailsCardComponent from "./index";
import { Expense } from "utils/interfaces";

export default {
    title: "Organisms/Details Card",
    component: DetailsCardComponent,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof DetailsCardComponent>;

export const DetailsCard: ComponentStory<typeof DetailsCardComponent> = (
    args
) => <DetailsCardComponent {...args} />;

const expense: Expense = {
    title: "title",
    details: [
        {
            label: "Cost",
            value: "200",
            type: "Price",
            currency: "PLN",
            id: "storybook",
        },
    ],
    id: "storybook",
};

DetailsCard.args = {
    expense: expense,
};
