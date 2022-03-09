import { Story, Meta } from "@storybook/react";

import { Grid as GridComponent, GridProps } from "./grid";
import Card from "../Card/card";

export default {
    component: GridComponent,
    title: "Atoms/Grid",
    argTypes: {
        ref: {
            table: { disable: true },
        },
        theme: {
            table: { disable: true },
        },
        as: {
            table: { disable: true },
        },
        forwardedAs: {
            table: { disable: true },
        },
    },
} as Meta;

interface StoryInterface extends GridProps {
    numberOfCards: number;
}

export const Grid: Story<StoryInterface> = ({ ...props }) => {
    const gridData = {
        isMobile: false,
        children: new Array(props.numberOfCards).fill(
            <Card>Grid element</Card>
        ),
    };

    return <GridComponent {...props}>{gridData.children}</GridComponent>;
};

Grid.args = {
    numberOfCards: 3,
    isMobile: false,
};
