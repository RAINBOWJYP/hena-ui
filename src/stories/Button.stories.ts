import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import FilledButton from "../components/FilledButton";

const meta = {
  title: "Button/FilledButton",
  component: FilledButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select" },
    size: { control: "select" },
    children: { control: "text" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof FilledButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Button",
  },
};
