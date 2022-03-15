import { Story, Meta } from "@storybook/react";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import {
    SidebarLink as SidebarLinkComponent,
    SidebarLinkProps,
} from "./sidebarLink";

export default {
    component: SidebarLinkComponent,
    title: "Molecules/Sidebar Link",
    argTypes: {
        icon: {
            table: { disable: true },
        },
        currentLink: {
            name: "State",
            options: ["Not active", "Active"],
            control: { type: "radio" },
        },
    },
} as Meta;

export const Small: Story<SidebarLinkProps> = (args) => (
    <SidebarLinkComponent {...args} />
);

Small.args = {
    currentLink: "href",
    href: "href",
    text: "Home",
};

export const Big: Story<SidebarLinkProps> = (args) => (
    <SidebarLinkComponent {...args} icon={faMapMarkerAlt} />
);

Big.args = {
    currentLink: "Not active",
    href: "Active",
    text: "Home",
};
