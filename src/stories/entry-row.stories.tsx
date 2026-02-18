import { EntryRow } from "@/core/components/ui/entry-row";
import { ListBox } from "@/core/components/ui/list-box";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  decorators: [
    (Story) => (
      <ListBox>
        <Story />
      </ListBox>
    ),
  ],
  component: EntryRow,
} satisfies Meta<typeof EntryRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EntryRowStory: Story = {
  args: {
    title: "User",
    placeholder: "Enter your username",
  },
};
