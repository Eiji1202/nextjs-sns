import { StoryObj } from "@storybook/react";
import SelectBox from "./SelectBox";

export default {
  component: SelectBox,
};

type Story = StoryObj<typeof SelectBox>;

export const ValueTypeString: Story = {
  args: {
    options: [
      { label: "String 1", value: "1" },
      { label: "String 2", value: "2" },
      { label: "String 3", value: "3" },
    ],
  },
};

export const ValueTypeNumber: Story = {
  args: {
    options: [
      { label: "Number 1", value: 1 },
      { label: "Number 2", value: 2 },
      { label: "Number 3", value: 3 },
    ],
  },
};

export const Disabled: Story = {
  args: {
    options: [
      { label: "Disabled 1", value: 1 },
      { label: "Disabled 2", value: 2 },
      { label: "Disabled 3", value: 3 },
    ],
    disabled: true,
  },
};
