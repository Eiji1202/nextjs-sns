import { StoryObj } from '@storybook/react';
import Auth from './Auth';

export default {
  component: Auth
}

type Story = StoryObj<typeof Auth>;

export const Default: Story = {
  args: {},
};
