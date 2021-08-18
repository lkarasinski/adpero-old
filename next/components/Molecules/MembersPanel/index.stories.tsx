import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import "../../../styles/globals.css";

import MembersPanelComponent from "./index";

export default {
    title: "Molecules/Members Panel",
    component: MembersPanelComponent,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof MembersPanelComponent>;

export const MembersPanel: ComponentStory<typeof MembersPanelComponent> = (
    args
) => <MembersPanelComponent {...args} />;
