import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import "../../../styles/globals.css";

import SmallSearchBarComponent from "./index";

export default {
    title: "Molecules/Small Search Bar",
    component: SmallSearchBarComponent,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof SmallSearchBarComponent>;

export const SmallSearchBar: ComponentStory<typeof SmallSearchBarComponent> = (
    args
) => <SmallSearchBarComponent {...args} />;
