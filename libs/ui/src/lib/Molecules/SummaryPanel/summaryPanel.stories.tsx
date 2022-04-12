import { Story, Meta } from "@storybook/react";

import {
    SummaryPanel as SummaryPanelComponent,
    SummaryPanelProps,
} from "./summaryPanel";

export default {
    component: SummaryPanelComponent,
    title: "Molecules/Summary Panel",
} as Meta;

export const SummaryPanel: Story<SummaryPanelProps> = (args) => (
    <SummaryPanelComponent {...args} />
);

SummaryPanel.args = {
    numberOfUsers: 0,
    totalCost: {
        value: 0,
        currency: "",
    },
    startDate: new Date(),
    endDate: new Date(),
};
