import { Story, Meta } from "@storybook/react";
import { dashboardTheme } from "@adpero/themes";
import { Label as LabelComponent, LabelProps } from "./label";

export default {
    component: LabelComponent,
    title: "Atoms/Label",
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

export const Label: Story<StoryInterface> = ({ color, children }) => (
    <LabelComponent color={color}>{children}</LabelComponent>
);

Label.args = {
    color: dashboardTheme.colors.primary.regular,
    children: "Label",
};
