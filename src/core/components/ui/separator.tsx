import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const separatorVariants = cva("bg-window-foreground/15 border-none", {
	variants: {
		orientation: {
			horizontal: "align-none my-2 block h-px w-full",
			vertical: "mx-2 inline-block h-full w-px align-middle",
		},
	},

	defaultVariants: {
		orientation: "horizontal",
	},
});

type SeparatorProps = React.ComponentProps<"div"> & {
	orientation?: "horizontal" | "vertical";
};

export function Separator({
	orientation = "horizontal",
	className,
	...rest
}: SeparatorProps) {
	return (
		<div
			role="separator"
			aria-orientation={orientation}
			className={cn(separatorVariants({ orientation }), className)}
			{...rest}
		/>
	);
}
