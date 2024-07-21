import { StoryObj } from '@storybook/react';
import SignInForm from './SignInForm';

export default {
  component: SignInForm
}

type Story = StoryObj<typeof SignInForm>;

export const Default: Story = {
  args: {},
};
