import { EntrySearchRow } from "@/core/components/ui/entry-search-row";
import { ListBox } from "@/core/components/ui/list-box";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: EntrySearchRow,
} satisfies Meta<typeof EntrySearchRow>;

export default meta;
type Story = StoryObj<typeof EntrySearchRow>;

export const EntrySearchRowStory: Story = {
  render: () => (
    <ListBox>
      <EntrySearchRow placeholder="Search anything" />
    </ListBox>
  ),
};
