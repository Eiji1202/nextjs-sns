import { StoryObj } from '@storybook/react';
import Button from './Button';

export default {
  component: Button
}

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Default',
  },
};

export const VariantSecondary: Story = {
  args: {
    label: 'Secondary',
    variant: 'secondary',
  },
};

export const VariantOutline: Story = {
  args: {
    label: 'Outline',
    variant: 'outline',
  },
};

export const SizeXS: Story = {
  args: {
    label: 'XS',
    size: 'xs',
  },
};

export const SizeSM: Story = {
  args: {
    label: 'SM',
    size: 'sm',
  },
};

export const SizeLG: Story = {
  args: {
    label: 'LG',
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
};

export const IsLoading: Story = {
  args: {
    label: 'IsLoading',
    isLoading: true,
  },
};
