import { Story, Meta } from "@storybook/react";
import { dashboardTheme } from "@adpero/themes";

import { Button as ButtonComponent, ButtonProps } from "./button";

export default {
    component: ButtonComponent,
    title: "Atoms/Button",
    argTypes: {
        color: {
            control: "color",
        },
        hoverColor: {
            control: "color",
        },
        children: {
            control: "text",
        },
        ref: {
            table: { disable: true },
        },
        theme: {
            table: { disable: true },
        },
        as: {
            table: { disable: true },
        },
        forwardedAs: {
            table: { disable: true },
        },
    },
} as Meta;

interface StoryInterface extends ButtonProps {
    children: React.ReactNode;
}

export const Button: Story<StoryInterface> = ({ children, ...props }) => (
    <ButtonComponent {...props}>{children}</ButtonComponent>
);

Button.args = {
    color: dashboardTheme.colors.primary.regular,
    hoverColor: undefined,
    children: "Button",
};
