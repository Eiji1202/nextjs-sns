import { StoryObj } from '@storybook/react';
import CustomLink from './CustomLink';

export default {
  component: CustomLink
}

type Story = StoryObj<typeof CustomLink>;

export const Default: Story = {
  args: {
    href: '/',
    children: 'Default',
  },
};

export const TextBlue: Story = {
  args: {
    href: '/',
    children: 'Blue',
    color: 'blue',
  },
};

export const Underline: Story = {
  args: {
    href: '/',
    children: 'Underline',
    color: 'blue',
    underline: true,
  },
};

export const Disabled: Story = {
  args: {
    href: '/',
    children: 'Disabled',
    disabled: true,
  },
};
