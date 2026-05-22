import { InputRow } from "@/core/components/ui/input-row";
import { PreferencesGroup } from "@/core/components/ui/preferences-group";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
	component: InputRow,
	tags: ["autodocs"],
} satisfies Meta<typeof InputRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "Name",
	},
	render: (args) => (
		<PreferencesGroup>
			<InputRow {...args} />
		</PreferencesGroup>
	),
};

export const Invalid: Story = {
	args: {
		title: "Name",
		"aria-invalid": true,
	},
	render: (args) => (
		<PreferencesGroup>
			<InputRow {...args} />
		</PreferencesGroup>
	),
};
