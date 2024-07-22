import { StoryObj } from '@storybook/react';
import ProfileIcon from './ProfileIcon';

export default {
  component: ProfileIcon
}

type Story = StoryObj<typeof ProfileIcon>;

export const Default: Story = {
  args: {
    src: "next.svg",
    alt: "プロフィールアイコン"
  },
};

export const Size40: Story = {
  args: {
    src: "next.svg",
    alt: "プロフィールアイコン",
    size: 40,
  },
};
