import Logo from "./Logo";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Logo,
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Logo />,
};
