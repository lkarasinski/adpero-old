import { Story, Meta } from "@storybook/react";
import { dashboardTheme } from "@adpero/themes";
import { Heading as HeadingComponent, HeadingProps } from "./heading";

export default {
    component: HeadingComponent,
    title: "Heading",
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

interface StoryInterface extends HeadingProps {
    children: React.ReactNode;
}

export const Heading: Story<StoryInterface> = ({ color, children }) => (
    <HeadingComponent color={color}>{children}</HeadingComponent>
);

Heading.args = {
    color: dashboardTheme.colors.primary.regular,
    children: "Heading",
};
