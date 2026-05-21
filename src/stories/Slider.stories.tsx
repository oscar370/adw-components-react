import { Slider } from "@/core/components/ui/slider";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
	component: Slider,
	tags: ["autodocs"],
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "Name",
	},
};
