import { ActionRow } from "@/core/components/ui/action-row";
import { Button } from "@/core/components/ui/button";
import { InputRow } from "@/core/components/ui/input-row";
import { PreferencesGroup } from "@/core/components/ui/preferences-group";
import { SelectRow } from "@/core/components/ui/select-row";
import { SwitchRow } from "@/core/components/ui/switch-row";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ChevronRight } from "lucide-react";

const meta = {
	component: PreferencesGroup,
	tags: ["autodocs"],
} satisfies Meta<typeof PreferencesGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Full: Story = {
	args: {
		title: "Section",
		description: "Section description",
		actions: <Button>Action</Button>,
		children: <Children />,
	},
};

export const Minimal: Story = {
	args: {
		children: <Children />,
	},
};

function Children() {
	return (
		<>
			<ActionRow title="Action Row" as="a" action={<ChevronRight />} />
			<InputRow title="Input Row" />
			<SelectRow title="Select Row">
				<option> Option 1 </option>
				<option> Option 2 </option>
			</SelectRow>
			<SwitchRow title="Switch Row" />
		</>
	);
}
