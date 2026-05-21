import { Input } from "@/core/components/ui/input";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
	component: Input,
	tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "Name",
	},
};
