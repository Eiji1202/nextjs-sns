import { StoryObj } from '@storybook/react';
import PostBox from './PostBox';

export default {
  component: PostBox
}

type Story = StoryObj<typeof PostBox>;

export const Default: Story = {
  args: {
    profileIcon: "/dummyProfileIcon.png",
    userId: "userId",
    username: "username",
  },
};
