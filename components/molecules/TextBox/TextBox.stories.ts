import { StoryObj } from '@storybook/react';
import TextBox from './TextBox';

export default {
  component: TextBox
}

type Story = StoryObj<typeof TextBox>;

export const Default: Story = {
  args: {},
};

export const Placeholder: Story = {
  args: {
    name: 'TextBox',
    placeholder: 'Placeholder',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    name: 'TextBox',
    placeholder: 'Disabled',
    disabled: true,
  },
};
