import { StoryObj } from '@storybook/react';
import Post from './Post';

export default {
  component: Post
}

type Story = StoryObj<typeof Post>;

export const Default: Story = {
  args: {
    postData: {
      username: 'username',
      profileIcon: '/vercel.svg',
      content: 'content',
      createdAt: '1時間前',
      postId: 'postId',
      userId: 'userId',
    },
    isDeletable: true,
    onClick: () => void 0,
  },
};
