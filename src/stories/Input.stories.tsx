import { Input } from "@/core/components/ui/input";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
	component: Input,
	tags: ["autodocs"],
	decorators: (Story) => (
		<form onSubmit={(e) => e.preventDefault()}>
			<Story />
		</form>
	),
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "Name",
	},
};

export const Required: Story = {
	args: {
		title: "Name",
		required: true,
	},
};

export const Invalid: Story = {
	args: {
		title: "Name",
		"aria-invalid": true,
	},
};
