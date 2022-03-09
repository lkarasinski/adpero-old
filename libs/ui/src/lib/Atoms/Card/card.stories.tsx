import { Story, Meta } from "@storybook/react";
import { Card as CardComponent } from "./card";

export default {
    component: CardComponent,
    title: "Atoms/Card",
    argTypes: {
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

interface StoryInterface {
    children: React.ReactNode;
}

export const Card: Story<StoryInterface> = ({ children }) => (
    <CardComponent>{children}</CardComponent>
);

Card.args = {
    children: "Card",
};
