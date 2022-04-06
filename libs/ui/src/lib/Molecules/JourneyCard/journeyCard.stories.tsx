import { Story, Meta } from "@storybook/react";

import {
    JourneyCard as JourneyCardComponent,
    JourneyCardProps,
} from "./journeyCard";

export default {
    component: JourneyCardComponent,
    title: "Molecules/Journey Card",
} as Meta;

export const JourneyCard: Story<JourneyCardProps> = (args) => (
    <JourneyCardComponent {...args} />
);

JourneyCard.args = {
    journey: {
        author: "author",
        createdAt: new Date(),
        editors: ["author"],
        expenses: [
            {
                title: "Expense Title",
                id: "",
                details: [
                    {
                        label: "Label",
                        value: "Value",
                        type: "Price",
                        id: "",
                        currency: "EUR",
                    },
                ],
            },
        ],
        name: "Journey",
        polls: [],
        users: [],
        startDate: new Date(),
        endDate: new Date(),
        id: "1",
        cost: {
            value: 0,
            currency: "EUR",
        },
    },
};
