import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      defaultValue: 'Default Click',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});
export const Secondary = Template.bind({});
Default.args = {
  variant: 'primary',
  size: 'lg',
  bgColor: '#f4f4f4',
  textColor: '#000',
  hoverColor: '#fff',
};
Secondary.args = {
  variant: 'secondary',
  size: 'md',
  theme: 'turquoise',
};
