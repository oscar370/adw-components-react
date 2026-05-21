import { Button } from "@/core/components/ui/button";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
	component: Button,
	tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Regular: Story = {
	args: {
		children: "Button",
	},
};

export const Flat: Story = {
	args: {
		variant: "flat",
		children: "Button",
	},
};

export const Suggested: Story = {
	args: {
		variant: "suggested",
		children: "Button",
	},
};

export const Destructive: Story = {
	args: {
		variant: "destructive",
		children: "Button",
	},
};
