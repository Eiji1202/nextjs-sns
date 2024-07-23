import { StoryObj } from '@storybook/react';
import Sidebar from './Sidebar';

export default {
  component: Sidebar
}

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {},
};
