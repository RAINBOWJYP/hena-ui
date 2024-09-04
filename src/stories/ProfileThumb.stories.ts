import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import ProfileThumb from "../components/ProfileThumb";

const meta = {
  title: "User/ProfileThumb",
  component: ProfileThumb,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    src: { control: "text", description: "Profile Thumbnail Image Src" },
    alt: { control: "text", description: "Profile Thumbnail Image alt" },
  },
} satisfies Meta<typeof ProfileThumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: "/image/onion_koongya.jpg",
    alt: "profile-img",
  },
};
