import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import EditDetailsPanelComponent from "./index";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
// import "../../../styles/globals.css";

export default {
    title: "Organisms/Details Panel",
    component: EditDetailsPanelComponent,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof EditDetailsPanelComponent>;

export const EditDetailsPanel: ComponentStory<
    typeof EditDetailsPanelComponent
> = (args) => <EditDetailsPanelComponent {...args} />;

EditDetailsPanel.args = {
    expenses: [
        {
            title: "Apartament",
            details: [
                { label: "Koszt", value: "50", type: "Price", currency: "PLN" },
                { label: "Koszt", value: "50", type: "Price", currency: "PLN" },
                { label: "Koszt", value: "50", type: "Price", currency: "PLN" },
                { label: "Koszt", value: "50", type: "Price", currency: "PLN" },
                { label: "Koszt", value: "50", type: "Price", currency: "PLN" },
                { label: "Koszt", value: "50", type: "Price", currency: "PLN" },
                { label: "Koszt", value: "50", type: "Price", currency: "PLN" },
                { label: "Koszt", value: "50", type: "Price", currency: "PLN" },
                { label: "Koszt", value: "50", type: "Price", currency: "PLN" },
                { label: "Koszt", value: "50", type: "Price", currency: "PLN" },
                { label: "Koszt", value: "50", type: "Price", currency: "PLN" },
            ],
        },
    ],
};
