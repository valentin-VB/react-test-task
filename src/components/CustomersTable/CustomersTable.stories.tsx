import { customers } from "../../constants/constants";
import CustomersTable from "./CustomersTable";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: CustomersTable,
} satisfies Meta<typeof CustomersTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    customers: [],
  },
};

export const Default: Story = {
  args: {
    customers: customers,
  },
};
