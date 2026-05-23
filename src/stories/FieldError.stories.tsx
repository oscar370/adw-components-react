import { FieldError } from "@/core/components/ui/field-error";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
	component: FieldError,
	tags: ["autodocs"],
} satisfies Meta<typeof FieldError>;

export default meta;

type Story = StoryObj<typeof meta>;

export const List: Story = {
	args: {
		errors: [{ message: "Error 1" }, { message: "Error 2" }],
	},
};

export const Unique: Story = {
	args: {
		errors: [{ message: "Error 1" }],
	},
};
