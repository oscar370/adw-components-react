import { ActionRow } from "@/core/components/ui/action-row";
import { ExpanderRow } from "@/core/components/ui/expander-row";
import { ListBox } from "@/core/components/ui/list-box";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChevronRight } from "lucide-react";

const meta = {
  component: ExpanderRow,
} satisfies Meta<typeof ExpanderRow>;

export default meta;
type Story = StoryObj<typeof ExpanderRow>;

export const ExpanderRowStory: Story = {
  render: () => (
    <div>
      <ListBox>
        <ActionRow title="Dummy" />
        <ExpanderRow title="Do you offer refunds?">
          <ActionRow title="No" />
        </ExpanderRow>
        <ActionRow title="Dummy" />
        <ExpanderRow title="Contact details">
          <ActionRow
            title="Github"
            as="a"
            href="https://github.com/oscar370/adw-components-react/issues"
            forceHover
          >
            <ChevronRight />
          </ActionRow>
        </ExpanderRow>
      </ListBox>
    </div>
  ),
};
