import { Story, Meta } from "@storybook/react";

import {
    SidebarTemplate as SidebarTemplateComponent,
    SidebarTemplateProps,
} from "./sidebarTemplate";

export default {
    component: SidebarTemplateComponent,
    title: "Organisms/Sidebar Template",
    argTypes: {
        toggleMenu: {
            table: {
                disable: true,
            },
        },
    },
} as Meta;

export const SidebarTemplate: Story<SidebarTemplateProps> = (args) => (
    <SidebarTemplateComponent {...args} />
);

SidebarTemplate.args = {
    isMobile: false,
    isMenuOpen: true,
    editMode: false,
    toggleMenu: () => {
        return;
    },
};
