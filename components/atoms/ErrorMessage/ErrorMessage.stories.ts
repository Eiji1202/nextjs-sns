import { StoryObj } from '@storybook/react';
import ErrorMessage from './ErrorMessage';

export default {
  component:ErrorMessage
}

type Story = StoryObj<typeof ErrorMessage>;

export const Default: Story = {
  args: {
    error: {
      message: 'エラーメッセージ'
    }
  },
};
