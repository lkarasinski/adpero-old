import React from 'react';
import { Meta, Story } from '@storybook/react';

import MediumButton, { ButtonProps } from '../components/Buttons/MediumButton';

export default {
	title: 'Buttons/Medium',
	component: MediumButton,
} as Meta;

const Template: Story<ButtonProps> = (args) => <MediumButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
