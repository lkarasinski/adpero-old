import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Text from "./index";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import "../../../styles/globals.css";

export default {
    title: "Atoms/Text",
    component: Text,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: "Text",
};
export const Dark = Template.bind({});
Dark.args = {
    children: "Text",
    isDark: true,
};
export const Small = Template.bind({});
Small.args = {
    children: "Text",
    isSmall: true,
};
