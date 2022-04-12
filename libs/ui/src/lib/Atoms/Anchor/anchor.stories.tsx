import { Story, Meta } from "@storybook/react";

import { Anchor as AnchorComponent, AnchorProps } from "./anchor";

export default {
    component: AnchorComponent,
    title: "Atoms/Anchor",
    argTypes: {
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

interface StoryInterface extends AnchorProps {
    children: React.ReactNode;
}

export const Anchor: Story<StoryInterface> = (args) => (
    <AnchorComponent {...args} />
);

Anchor.args = {
    children: "Anchor",
};
