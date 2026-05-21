import { ExpanderRow } from "@/core/components/ui/expander-row";
import { InputRow } from "@/core/components/ui/input-row";
import { PreferencesGroup } from "@/core/components/ui/preferences-group";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
	component: ExpanderRow,
	tags: ["autodocs"],
} satisfies Meta<typeof ExpanderRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "User",
		children: <Children />,
	},
	render: (args) => (
		<PreferencesGroup>
			<ExpanderRow {...args} />
		</PreferencesGroup>
	),
};

function Children() {
	return (
		<>
			<InputRow title="Name" />
			<InputRow title="Email" />
		</>
	);
}
