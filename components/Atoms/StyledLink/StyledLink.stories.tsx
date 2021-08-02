import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import StyledLink from "./index";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import "../../../styles/globals.css";

export default {
    title: "Atoms/Styled Link",
    component: StyledLink,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof StyledLink>;

const Template: ComponentStory<typeof StyledLink> = (args) => (
    <StyledLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    children: "StyledLink",
    href: "/",
};
