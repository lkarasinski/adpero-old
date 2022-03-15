import { Poll } from "@adpero/interfaces";
import { Story, Meta } from "@storybook/react";

import {
    PollsPanel as PollsPanelComponent,
    PollsPanelProps,
} from "./pollsPanel";

export default {
    component: PollsPanelComponent,
    title: "Organisms/Polls Panel",
    argTypes: {
        polls: {
            table: {
                disable: true,
            },
        },
    },
} as Meta;

export const PollsPanel: Story<PollsPanelProps> = (args) => (
    <PollsPanelComponent {...args} />
);

const mockPoll: Poll = {
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
};

PollsPanel.args = {
    isMobile: false,
    polls: [mockPoll],
};
