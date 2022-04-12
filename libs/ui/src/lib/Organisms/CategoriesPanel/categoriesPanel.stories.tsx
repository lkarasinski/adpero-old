import { Category } from "@adpero/interfaces";
import { Story, Meta } from "@storybook/react";

import {
    CategoriesPanel as CategoriesPanelComponent,
    CategoriesPanelProps,
} from "./categoriesPanel";

export default {
    component: CategoriesPanelComponent,
    title: "Organisms/Categories Panel",
} as Meta;

export const CategoriesPanel: Story<CategoriesPanelProps> = (args) => (
    <CategoriesPanelComponent {...args} />
);

const mockDetail: Category = {
    title: "Category Title",
    details: [
        {
            label: "Detail Label",
            value: "Detail Value",
            type: "Text",
            currency: "",
            id: "1",
        },
    ],
    id: "1",
};

CategoriesPanel.args = {
    categories: [mockDetail],
};
