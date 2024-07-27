import { StoryObj } from '@storybook/react';
import Posts from './Posts';

export default {
  component: Posts
}

type Story = StoryObj<typeof Posts>;

export const Default: Story = {
  args: {},
};
