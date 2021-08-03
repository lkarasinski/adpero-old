import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import "../../../styles/globals.css";

import SummaryPanel from "./index";

export default {
    title: "Organisms/Summary Panel",
    component: SummaryPanel,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof SummaryPanel>;

const Template: ComponentStory<typeof SummaryPanel> = (args) => (
    <SummaryPanel {...args} />
);

export const Primary = Template.bind({});
