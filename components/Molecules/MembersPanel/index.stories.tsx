import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import "../../../styles/globals.css";

import MembersPanel from "./index";

export default {
    title: "Organisms/Members Panel",
    component: MembersPanel,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof MembersPanel>;

const Template: ComponentStory<typeof MembersPanel> = (args) => (
    <MembersPanel {...args} />
);

export const Primary = Template.bind({});
