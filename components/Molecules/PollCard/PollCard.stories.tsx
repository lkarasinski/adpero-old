import React from "react";
import PollCard from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "utils/theme";
import "styles/globals.css";

export default {
    title: "Molecules/PollCard",
    component: PollCard,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof PollCard>;

const Template: ComponentStory<typeof PollCard> = (args) => (
    <PollCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    detail: "Apartament",
    label: "Poznań",
};
