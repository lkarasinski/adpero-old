import { Story, Meta } from "@storybook/react";

import {
    DetailsContainer as DetailsContainerComponent,
    DetailsContainerProps,
} from "./detailsContainer";

export default {
    component: DetailsContainerComponent,
    title: "Molecules/Details Container",
} as Meta;

export const DetailsContainer: Story<DetailsContainerProps> = (args) => (
    <DetailsContainerComponent {...args} />
);

DetailsContainer.args = {
    label: "Label",
    value: "Value",
};
