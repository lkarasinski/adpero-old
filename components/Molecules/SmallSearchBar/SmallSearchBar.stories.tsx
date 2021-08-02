import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import "../../../styles/globals.css";

import SmallSearchBar from "./index";

export default {
    title: "Molecules/Small Search Bar",
    component: SmallSearchBar,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof SmallSearchBar>;

const Template: ComponentStory<typeof SmallSearchBar> = (args) => (
    <SmallSearchBar {...args} />
);

export const Primary = Template.bind({});
