import { ActionRow } from "@/core/components/ui/action-row";
import { Button } from "@/core/components/ui/button";
import { ButtonRow } from "@/core/components/ui/button-row";
import { EntryRow } from "@/core/components/ui/entry-row";
import { ListBox } from "@/core/components/ui/list-box";
import { SelectRow } from "@/core/components/ui/select-row";
import { SwitchRow } from "@/core/components/ui/switch-row";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChevronRight, HelpCircle, Home, Plus, User } from "lucide-react";
import { useState } from "react";

const meta = {
  component: ListBox,
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ListBoxSimpleStory: Story = {
  args: {
    children: (
      <ActionRow
        title="User account"
        subtitle="Manage your data and synchronization"
        icon={<User />}
        as="a"
        href="account"
      >
        <ChevronRight size={18} />
      </ActionRow>
    ),
  },
};

export const ListBoxStory: Story = {
  args: {
    title: "Configuration",
    description: "Manage account settings",
    headerButton: (
      <Button>
        <HelpCircle />

        <span>Help</span>
      </Button>
    ),
    children: <List />,
  },
};

function List() {
  const [checked, setChecked] = useState(true);
  const [select, setSelect] = useState("visible");

  function toggle() {
    setChecked((prev) => !prev);
  }

  return (
    <>
      <ActionRow
        title="User account"
        subtitle="Manage your data and synchronization"
        icon={<User />}
        as="a"
        href="account"
      >
        <ChevronRight size={18} />
      </ActionRow>

      <SwitchRow title="Notifications" checked={checked} onChange={toggle} />

      <SelectRow
        title="Visibility"
        options={[
          { label: "Visible", value: "visible" },
          { label: "Invisible", value: "invisible" },
        ]}
        value={select}
        onChange={setSelect}
      />

      <ActionRow title="Account created on" subtitle="12 jan 2026" property />

      <EntryRow title="Change status" value={"Sleeping"} />

      <ButtonRow>
        <Plus />

        <span> Add new account </span>
      </ButtonRow>
    </>
  );
}

export const ListBoxNavStory: Story = {
  args: {
    as: "nav",
    children: <NavList />,
  },
};

function NavList() {
  return (
    <>
      <ActionRow
        title="Home"
        as="a"
        href="home"
        isActive
        forceHover
        icon={<Home />}
      />
      <ActionRow title="User" as="a" href="home" forceHover icon={<User />} />
    </>
  );
}
