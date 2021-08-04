import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import "../../../styles/globals.css";
import DetailsCardComponent from "./index";

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
const details = [
    { label: "Cost", value: "200 PLN" },
    { label: "Address", value: "Bieniowicza 13" },
    { label: "Check-in hour", value: "12 AM" },
    { label: "Link", value: "www.booking.com" },
];

DetailsCard.args = { details: details };
