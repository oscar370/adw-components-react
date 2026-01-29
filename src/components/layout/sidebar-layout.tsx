import { Home, Settings } from "lucide-react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ActionRow } from "../../core/components/ui/action-row";
import { ListBox } from "../../core/components/ui/list-box";
import { ModalManager } from "../../core/components/ui/modal-manager";
import { Sidebar } from "../../core/components/ui/sidebar";
import { SplitView } from "../../core/components/ui/split-view";

const SIDEBAR_ELEMENTS = [
  {
    label: "Home",
    to: "/",
    icon: Home,
  },
  {
    label: "Settings",
    to: "/settings",
    icon: Settings,
  },
];

export function SidebarLayout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  function toggleSidebar() {
    setSidebarOpen((prev) => !prev);
  }

  return (
    <>
      <Sidebar open={isSidebarOpen} onToggle={toggleSidebar}>
        <SplitView>
          <Sidebar.Panel title="Demo">
            <ListBox as="nav">
              {SIDEBAR_ELEMENTS.map(({ label, to, icon: Icon }) => (
                <ActionRow
                  accent="text-(--text)!"
                  key={to}
                  title={label}
                  as={Link}
                  to={to}
                  icon={<Icon />}
                  isActive={location.pathname === to}
                  onClick={() => toggleSidebar()}
                />
              ))}
            </ListBox>
          </Sidebar.Panel>

          <Outlet />
        </SplitView>
      </Sidebar>

      <ModalManager />
    </>
  );
}
