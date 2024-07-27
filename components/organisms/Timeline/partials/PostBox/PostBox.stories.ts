import { StoryObj } from '@storybook/react';
import PostBox, { PostFormData } from './PostBox';

export default {
  component: PostBox
}

type Story = StoryObj<typeof PostBox>;

export const Default: Story = {
  args: {
    userData: {
      userId:"userId",
      username: "vercelくん",
      profileIcon: "/vercel.svg"
    },
    onClick: (_data: PostFormData) => void 0,
  },
};

export const Disabled: Story = {
  args: {
    userData: null
  },
};
