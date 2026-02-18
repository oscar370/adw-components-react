import { ActionRow } from "@/core/components/ui/action-row";
import { ListBox } from "@/core/components/ui/list-box";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChevronRight, User } from "lucide-react";

const meta = {
  component: ActionRow,
} satisfies Meta<typeof ActionRow>;

export default meta;
type Story = StoryObj<typeof ActionRow>;

export const ActionRowStory: Story = {
  render: () => (
    <ListBox.Root>
      <ListBox.Content>
        <ActionRow
          title="User account"
          subtitle="Manage your data and synchronization"
          icon={<User />}
          as="a"
          href="account"
        >
          <ChevronRight size={18} />
        </ActionRow>
      </ListBox.Content>
    </ListBox.Root>
  ),
};
