import { Entry } from "@/core/components/ui/entry";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: Entry,
} satisfies Meta<typeof Entry>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EntryStory: Story = {
  args: {
    title: "User",
    placeholder: "Enter your username",
  },
};
