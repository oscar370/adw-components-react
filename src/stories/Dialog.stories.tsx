/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/core/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogProvider,
	DialogTrigger,
	useDialog,
} from "@/core/components/ui/dialog";
import { HeaderBar } from "@/core/components/ui/header-bar";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { X } from "lucide-react";

const meta = {
	component: Dialog,
	tags: ["autodocs"],
	subcomponents: {
		DialogProvider,
		DialogClose,
		DialogTrigger,
	},
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "Replace file?",
		description:
			"A file named 'exaple.png' alredy exist. Do yo want to replace it?",
	} as any,
	render: (args: any) => (
		<DialogProvider>
			<DialogTrigger>Open dialog</DialogTrigger>
			<Dialog>
				<div className="flex w-full flex-col items-center justify-center gap-2">
					<h1 className="text-center text-xl font-bold">{args.title}</h1>
					<p className="text-dim-foreground">{args.description}</p>
					<div className="mt-2 flex w-full items-center justify-center gap-2">
						<DialogClose>Cancel</DialogClose>
						<Button variant="destructive">Replace</Button>
					</div>
				</div>
			</Dialog>
		</DialogProvider>
	),
};

export const HeaderBarDialog: Story = {
	args: {
		title: "Replace file?",
		description:
			"A file named 'exaple.png' alredy exist. Do yo want to replace it?",
	} as any,
	render: (args: any) => (
		<DialogProvider>
			<DialogTrigger>Open dialog</DialogTrigger>
			<Dialog className="px-0 pt-0">
				<HeaderBar
					className="mb-4"
					variant="flat"
					center={<Center />}
					right={<Rigth />}
				/>

				<div className="flex w-full flex-col items-center justify-center gap-2">
					<h1 className="text-center text-xl font-bold">{args.title}</h1>
					<p className="text-dim-foreground">{args.description}</p>
					<div className="mt-2 flex w-full items-center justify-center gap-2">
						<DialogClose>Cancel</DialogClose>
						<Button variant="destructive">Replace</Button>
					</div>
				</div>
			</Dialog>
		</DialogProvider>
	),
};

function Center() {
	return <h1 className="text-center font-bold">Title</h1>;
}

function Rigth() {
	const { closeDialog } = useDialog();

	return (
		<Button
			aria-label="Close window"
			className="size-6 min-h-0 rounded-full px-1"
			onClick={closeDialog}
		>
			<X />
		</Button>
	);
}
