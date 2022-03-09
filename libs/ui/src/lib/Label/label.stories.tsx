import { Story, Meta } from "@storybook/react";
import { dashboardTheme } from "@adpero/themes";
import { Label, LabelProps } from "./label";

export default {
    component: Label,
    title: "Label",
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

interface StoryInterface extends LabelProps {
    children: React.ReactNode;
}

export const Template: Story<StoryInterface> = ({ color, children }) => (
    <Label color={color}>{children}</Label>
);

Template.args = {
    color: dashboardTheme.colors.primary.regular,
    children: "Label",
};
