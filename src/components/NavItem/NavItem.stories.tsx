import NavItem from "./NavItem";
import type { Meta, StoryObj } from "@storybook/react";
import Dashboard from "../../assets/dashboard.svg";

const meta = {
  component: NavItem,
} satisfies Meta<typeof NavItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Dashboard",
    icon: <Dashboard />,
  },
};
