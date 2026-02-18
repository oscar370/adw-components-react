import { ButtonRow } from "@/core/components/ui/button-row/button-row";
import { ListBox } from "@/core/components/ui/list-box";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: ButtonRow,
} satisfies Meta<typeof ButtonRow>;

export default meta;
type Story = StoryObj<typeof ButtonRow>;

export const ButtonRowStory: Story = {
  render: () => (
    <ListBox>
      <ButtonRow>Regular</ButtonRow>
      <ButtonRow variant="suggested">Suggested</ButtonRow>
      <ButtonRow variant="destructive">Destructive</ButtonRow>
    </ListBox>
  ),
};
