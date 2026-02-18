import { Button } from "@/core/components/ui/button";
import { Modal } from "@/core/components/ui/modal";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

const meta = {
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

export const ModalStory: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <main className="h-dvh w-full">
          <Button onClick={() => setIsOpen(true)}>Open modal</Button>
          <Modal title="Modal" open={isOpen} onClose={() => setIsOpen(false)}>
            <h1>Hi</h1>
          </Modal>
        </main>
      </>
    );
  },
};
