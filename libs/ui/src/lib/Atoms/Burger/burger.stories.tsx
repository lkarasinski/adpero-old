import { Story, Meta } from "@storybook/react";

import { Burger as BurgerComponent } from "./burger";

export default {
    component: BurgerComponent,
    title: "Atoms/Burger",
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

export const Burger: Story = () => <BurgerComponent />;
