import { StoryObj } from '@storybook/react';
import Header from './Header';

export default {
  component: Header
}

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {},
};
