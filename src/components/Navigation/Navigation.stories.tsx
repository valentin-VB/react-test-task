import Navigation from "./Navigation";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Navigation,
} satisfies Meta<typeof Navigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Navigation />,
};
