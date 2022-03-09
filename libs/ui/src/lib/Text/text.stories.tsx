import { Story, Meta } from "@storybook/react";
import { dashboardTheme } from "@adpero/themes";
import { Text, TextProps } from "./text";

export default {
    component: Text,
    title: "Text",
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

export const Template: Story<StoryInterface> = ({ color, children }) => (
    <Text color={color}>{children}</Text>
);

Template.args = {
    color: dashboardTheme.colors.primary.regular,
    children: "Text",
};
