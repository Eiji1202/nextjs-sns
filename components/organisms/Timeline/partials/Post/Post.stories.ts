import { StoryObj } from '@storybook/react';
import Post from './Post';

export default {
  component: Post
}

type Story = StoryObj<typeof Post>;

export const Default: Story = {
  args: {},
};
