import React from 'react';
import PollsPanel from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';
import 'styles/globals.css';

export default {
    title: 'Organisms/Polls Panel',
    component: PollsPanel,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof PollsPanel>;

const Template: ComponentStory<typeof PollsPanel> = (args) => (
    <PollsPanel {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    polls: [
        {
            journeyName: 'Poznań',
            detail: 'Apartament',
        },
        {
            journeyName: 'Poznań',
            detail: 'Apartament',
        },
        {
            journeyName: 'Poznań',
            detail: 'Apartament',
        },
        {
            journeyName: 'Poznań',
            detail: 'Apartament',
        },
    ],
};
