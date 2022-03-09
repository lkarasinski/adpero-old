import { Story, Meta } from "@storybook/react";
import { dashboardTheme } from "@adpero/themes";
import { Text as TextComponent, TextProps } from "./text";

export default {
    component: TextComponent,
    title: "Atoms/Text",
    argTypes: {
        color: {
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

interface StoryInterface extends TextProps {
    children: React.ReactNode;
}

export const Text: Story<StoryInterface> = ({ color, children }) => (
    <TextComponent color={color}>{children}</TextComponent>
);

Text.args = {
    color: dashboardTheme.colors.primary.regular,
    children: "Text",
};
