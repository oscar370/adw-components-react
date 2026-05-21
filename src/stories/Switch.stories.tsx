import { Switch } from "@/core/components/ui/switch";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
	component: Switch,
	tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "Dark mode",
	},
};
