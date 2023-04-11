import Customers from "./Customers";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Customers,
} satisfies Meta<typeof Customers>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  render: () => <Customers />,
};
