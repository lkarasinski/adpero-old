import { Journey } from "@adpero/interfaces";
import { Story, Meta } from "@storybook/react";

import {
    CardsPanel as CardsPanelComponent,
    CardsPanelProps,
} from "./cardsPanel";

export default {
    component: CardsPanelComponent,
    title: "Organisms/Cards Panel",
} as Meta;

export const CardsPanel: Story<CardsPanelProps> = (args) => (
    <CardsPanelComponent {...args} />
);

const mockJourney: Journey = {
    author: "author",
    createdAt: new Date(),
    editors: ["author"],
    categories: [
        {
            title: "Category Title",
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
};

CardsPanel.args = {
    label: "Cards Panel",
    cards: [mockJourney],
};
