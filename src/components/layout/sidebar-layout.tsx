import { Home, Settings } from "lucide-react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ActionRow } from "../ui/action-row";
import { ListBox } from "../ui/list-box";
import { ModalManager } from "../ui/modal-manager";
import { Sidebar } from "../ui/sidebar";
import { SplitView } from "../ui/split-view";

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
      <SplitView>
        <Sidebar open={isSidebarOpen} onToggle={toggleSidebar}>
          <Sidebar.Panel>
            <ListBox as="nav">
              {SIDEBAR_ELEMENTS.map(({ label, to, icon: Icon }) => (
                <ActionRow
                  key={to}
                  title={label}
                  as={Link}
                  to={to}
                  icon={<Icon />}
                  accent="(--text)"
                  isActive={location.pathname === to}
                  onClick={() => toggleSidebar()}
                />
              ))}
            </ListBox>
          </Sidebar.Panel>

          <div>
            <Outlet />
          </div>
        </Sidebar>
      </SplitView>

      <ModalManager />
    </>
  );
}
