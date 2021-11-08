import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import StyledLink from "./index";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import { faColumns } from "@fortawesome/free-solid-svg-icons";
import "../../../styles/globals.css";

export default {
    title: "Molecules/Styled Link",
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

export const Active = Template.bind({});
Active.args = {
    children: "StyledLink",
    icon: faColumns,
    href: "/",
};
Active.parameters = {
    nextRouter: {
        pathname: "/",
    },
};

export const InActive = Template.bind({});
InActive.args = {
    children: "StyledLink",
    href: "/journeys",
    icon: faColumns,
};

InActive.parameters = {
    nextRouter: {
        pathname: "/",
    },
};
