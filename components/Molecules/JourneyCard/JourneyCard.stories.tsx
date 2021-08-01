import React from 'react';
import JourneyCard from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../utils/theme';
import '../../../styles/globals.css';

export default {
    title: 'Molecules/JourneyCard',
    component: JourneyCard,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof JourneyCard>;

const Template: ComponentStory<typeof JourneyCard> = (args) => (
    <JourneyCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    children: 'Label',
    label: 'Poznań',
    elements: ['Apartament', 'Transport'],
};
