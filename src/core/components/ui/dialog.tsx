"use client";

import { createContext, useContext, useRef } from "react";
import { createPortal } from "react-dom";
import { cn } from "../../lib/utils";
import { Button } from "./button";

export function useDialog() {
	const context = useContext(DialogContext);
	if (!context) {
		throw new Error("useDialog must be used within a Dialog");
	}
	return context;
}

type DialogContextState = {
	dialogRef: React.RefObject<HTMLDialogElement | null>;
	closeDialog: () => void;
	openDialog: () => void;
};

const DialogContext = createContext<DialogContextState | null>(null);

export function DialogProvider({ children }: React.PropsWithChildren) {
	const dialogRef = useRef<HTMLDialogElement | null>(null);
	const closeDialog = () => dialogRef?.current?.close();
	const openDialog = () => dialogRef?.current?.showModal();

	return (
		<DialogContext value={{ dialogRef, closeDialog, openDialog }}>
			{children}
		</DialogContext>
	);
}

type DialogProps = React.ComponentProps<"div"> & {
	classList?: {
		root?: string;
		backdrop?: string;
	};
};

export function Dialog({
	className,
	children,
	classList,
	...rest
}: DialogProps) {
	const { dialogRef, closeDialog } = useDialog();

	return createPortal(
		<dialog
			className={cn(
				"pointer-events-auto invisible fixed inset-0 m-0 grid h-full max-h-none w-full max-w-none place-items-center overflow-clip overscroll-contain bg-[#0000] p-0 text-inherit opacity-0 open:visible open:bg-[#0006] open:opacity-100",
				"group transition-discrete",
				"transition-opacity duration-200 ease-out",
				"starting:open:invisible starting:open:opacity-0",
				classList?.root,
			)}
			ref={dialogRef}
		>
			<div
				className={cn(
					"bg-dialog-background text-dialog-foreground col-start-1 row-start-1 max-h-dvh w-[90%] max-w-lg overflow-y-auto overscroll-contain rounded-lg p-6",
					"opacity-0 transition-opacity duration-200 ease-out",
					"group-open:opacity-100",
					"starting:group-open:opacity-0",
					className,
				)}
				{...rest}
			>
				{children}
			</div>

			<div
				className={cn(
					"z-[-1] col-start-1 row-start-1 grid place-self-stretch bg-[#0000]",
					classList?.backdrop,
				)}
			>
				<button className="cursor-pointer" onClick={closeDialog}>
					<span className="sr-only">Close dialog</span>
				</button>
			</div>
		</dialog>,
		document.body,
	);
}

export function DialogTrigger({
	children,
	...rest
}: React.ComponentProps<typeof Button>) {
	const { openDialog } = useDialog();

	return (
		<Button {...rest} onClick={openDialog}>
			{children}
		</Button>
	);
}

export function DialogClose({
	children,
	variant = "pressed",
	...rest
}: React.ComponentProps<typeof Button>) {
	const { closeDialog } = useDialog();

	return (
		<Button variant={variant} {...rest} onClick={closeDialog}>
			{children}
		</Button>
	);
}
