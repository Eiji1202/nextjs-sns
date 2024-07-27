import { StoryObj } from "@storybook/react";
import SignOutButton from "./SignOutButton";

export default {
  component: SignOutButton,
};

type Story = StoryObj<typeof SignOutButton>;

export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
