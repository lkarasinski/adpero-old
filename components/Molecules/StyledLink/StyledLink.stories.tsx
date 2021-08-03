import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import StyledLink from "./index";
import { withNextRouter } from "storybook-addon-next-router";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import "../../../styles/globals.css";

export default {
    title: "Atoms/Styled Link",
    component: StyledLink,
    decorators: [
        withNextRouter,
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

Template.parameters = {
    nextRouter: {
        path: "/",
    },
};

export const Primary = Template.bind({});
Primary.args = {
    children: "StyledLink",
    href: "/",
};
