import { PreferencesGroup } from "@/core/components/ui/preferences-group";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ChevronRight, UserCircle2 } from "lucide-react";
import { ActionRow } from "../core/components/ui/action-row";

const meta = {
	component: ActionRow,
	tags: ["autodocs"],
} satisfies Meta<typeof ActionRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Full: Story = {
	args: {
		icon: <UserCircle2 />,
		title: "Oscar",
		subtitle: "Last conection - 2026/05/20",
		action: <ChevronRight />,
		as: "a",
	},
	render: (args) => (
		<PreferencesGroup>
			<ActionRow {...args} />
		</PreferencesGroup>
	),
};

export const Property: Story = {
	args: {
		title: "OS",
		subtitle: "Fedora 44",
		property: true,
	},
	render: (args) => (
		<PreferencesGroup>
			<ActionRow {...args} />
		</PreferencesGroup>
	),
};
