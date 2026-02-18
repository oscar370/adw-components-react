import { EntrySearch } from "@/core/components/ui/entry-search";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: EntrySearch,
} satisfies Meta<typeof EntrySearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EntrySearchStory: Story = {
  args: {
    placeholder: "Search anything",
  },
};
