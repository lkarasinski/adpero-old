import React from "react";
import NotLoggedInBannerComponent from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import "../../../styles/globals.css";

export default {
    title: "Molecules/Not Logged In Banner",
    component: NotLoggedInBannerComponent,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof NotLoggedInBannerComponent>;

export const NotLoggedInBanner: ComponentStory<
    typeof NotLoggedInBannerComponent
> = (args) => <NotLoggedInBannerComponent {...args} />;
