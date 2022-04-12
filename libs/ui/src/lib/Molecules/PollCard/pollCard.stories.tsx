import { Story, Meta } from "@storybook/react";

import { PollCard as PollCardComponent, PollCardProps } from "./pollCard";

export default {
    component: PollCardComponent,
    title: "Molecules/Poll Card",
} as Meta;

export const PollCard: Story<PollCardProps> = (args) => (
    <PollCardComponent {...args} />
);

PollCard.args = {
    journeyName: "",
    poll: {
        title: "Poll Title",
        id: "1",
        votes: [],
        content: [
            {
                details: [],
                title: "Category Title",
                id: "",
            },
        ],
    },
};
