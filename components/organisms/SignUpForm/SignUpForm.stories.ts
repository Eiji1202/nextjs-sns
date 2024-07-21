import { StoryObj } from '@storybook/react';
import SignUpForm from './SignUpForm';

export default {
  component: SignUpForm
}

type Story = StoryObj<typeof SignUpForm>;

export const Default: Story = {
  args: {},
};
