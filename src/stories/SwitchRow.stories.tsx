import { PreferencesGroup } from "@/core/components/ui/preferences-group";
import { SwitchRow } from "@/core/components/ui/switch-row";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
	component: SwitchRow,
	tags: ["autodocs"],
} satisfies Meta<typeof SwitchRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "Dark mode",
	},
	render: (args) => (
		<PreferencesGroup>
			<SwitchRow {...args} />
		</PreferencesGroup>
	),
};
