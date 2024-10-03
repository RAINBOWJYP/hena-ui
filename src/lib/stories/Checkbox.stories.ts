import { Checkbox } from "@lib/components";
import { CheckboxProps } from "@lib/components/Checkbox";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React from "react";

const meta = {
  title: "TextField/Checkbox",
  component: Checkbox as React.FC<CheckboxProps>,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text", description: "Checkbox value" },
  },
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "행복",
    id: "happy",
    onChange: fn(),
  },
};
