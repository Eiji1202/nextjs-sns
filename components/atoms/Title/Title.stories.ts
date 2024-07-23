import { StoryObj } from '@storybook/react';
import Title from './Title';

export default {
  component: Title
}

type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    title: "Title"
  },
};
