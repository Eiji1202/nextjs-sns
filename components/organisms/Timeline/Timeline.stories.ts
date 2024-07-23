import { StoryObj } from '@storybook/react';
import Timeline from './Timeline';

export default {
  component: Timeline
}

type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  args: {},
};
