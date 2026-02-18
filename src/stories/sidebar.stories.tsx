import { ActionRow } from "@/core/components/ui/action-row";
import { HeaderBar } from "@/core/components/ui/header-bar";
import { ListBox } from "@/core/components/ui/list-box";
import { Sidebar } from "@/core/components/ui/sidebar";
import { SplitView } from "@/core/components/ui/split-view";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Home, User } from "lucide-react";
import { useState } from "react";

const meta = {
  component: Sidebar,
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const SidebarStory: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleSidebar() {
      setIsOpen((prev) => !prev);
    }

    return (
      <>
        <SplitView>
          <Sidebar open={isOpen} onToggle={toggleSidebar}>
            <Sidebar.Panel>
              <ListBox as="nav">
                <ActionRow
                  title="Home"
                  as="a"
                  href="/"
                  isActive
                  icon={<Home />}
                  onClick={(e) => {
                    // Prevent default is only used to avoid breaking the Storybook presentation
                    e?.preventDefault();
                    toggleSidebar();
                  }}
                />

                <ActionRow
                  title="User"
                  as="a"
                  href="user"
                  icon={<User />}
                  onClick={(e) => {
                    e?.preventDefault();
                    toggleSidebar();
                  }}
                />
              </ListBox>
            </Sidebar.Panel>

            <main className="px-4">
              <HeaderBar title="Home" />
              <h1>Content</h1>
            </main>
          </Sidebar>
        </SplitView>
      </>
    );
  },
};
