import { Story, Meta } from "@storybook/react";

import {
    DetailsCard as DetailsCardComponent,
    DetailsCardProps,
} from "./detailsCard";

export default {
    component: DetailsCardComponent,
    title: "Molecules/Details Card",
} as Meta;

export const DetailsCard: Story<DetailsCardProps> = (args) => (
    <DetailsCardComponent {...args} />
);

DetailsCard.args = {
    expense: {
        title: "Title",
        id: "1",
        details: [
            {
                label: "Label",
                value: "Value",
                type: "Price",
                id: "1",
                currency: "EUR",
            },
        ],
    },
};
