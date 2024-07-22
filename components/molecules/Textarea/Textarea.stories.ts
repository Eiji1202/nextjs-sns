import { StoryObj } from '@storybook/react';
import Textarea from './Textarea';

export default {
  component: Textarea
}

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {},
};

export const Placeholder: Story = {
  args: {
    placeholder: 'Placeholder',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled',
    disabled: true,
  },
};

export const Rows6: Story = {
  args: {
    placeholder: 'Rows 6',
    rows: 6,
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Error',
    error: {
      message: 'Error message',
    },
  },
};
