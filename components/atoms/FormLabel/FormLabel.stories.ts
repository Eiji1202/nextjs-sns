import { StoryObj } from '@storybook/react';
import FormLabel from './FormLabel';

export default {
  component: FormLabel
}

type Story = StoryObj<typeof FormLabel>;

export const Default: Story = {
  args: {
    label: 'ラベル',
  },
};

export const Required: Story = {
  args: {
    htmlFor: 'example',
    label: 'ラベル',
    required: true,
  },
};
