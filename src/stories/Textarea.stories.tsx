import { Textarea } from "@/core/components/ui/textarea";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
	component: Textarea,
	tags: ["autodocs"],
	decorators: (Story) => (
		<form onSubmit={(e) => e.preventDefault()}>
			<Story />
		</form>
	),
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "Note",
	},
};
