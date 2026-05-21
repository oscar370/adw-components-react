import { PreferencesGroup } from "@/core/components/ui/preferences-group";
import { SelectRow } from "@/core/components/ui/select-row";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
	component: SelectRow,
	tags: ["autodocs"],
} satisfies Meta<typeof SelectRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "Country",
	},
	render: (args) => (
		<PreferencesGroup>
			<SelectRow {...args}>
				<option>Mexico</option>
				<option>United States</option>
			</SelectRow>
		</PreferencesGroup>
	),
};
