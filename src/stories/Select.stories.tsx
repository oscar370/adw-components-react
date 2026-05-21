import { Select } from "@/core/components/ui/select";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
	component: Select,
	tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "Country",
		children: <Children />,
	},
};

function Children() {
	return (
		<>
			<option>Mexico</option>
			<option>United States</option>
		</>
	);
}
