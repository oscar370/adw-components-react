import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const headerBarVariants = cva(
	"grid min-h-8 w-full grid-cols-3 items-center justify-center border-b px-2",
	{
		variants: {
			variant: {
				regular: "bg-headerbar-background border-headerbar-border/15",
				flat: "border-none bg-transparent",
			},
		},
		defaultVariants: {
			variant: "regular",
		},
	},
);

type HeaderBarProps = React.ComponentProps<"header"> & {
	left?: React.ReactNode;
	center?: React.ReactNode;
	right?: React.ReactNode;
	classList?: {
		left?: string;
		center?: string;
		right?: string;
	};
} & VariantProps<typeof headerBarVariants>;

export function HeaderBar({
	left,
	center,
	right,
	variant,
	classList,
	className,
	...rest
}: HeaderBarProps) {
	return (
		<header className={cn(headerBarVariants({ variant }), className)} {...rest}>
			<div
				className={cn(
					"col-start-1 flex w-full items-center justify-start",
					classList?.left,
				)}
			>
				{left}
			</div>
			<div
				className={cn(
					"col-start-2 flex w-full items-center justify-center",
					classList?.center,
				)}
			>
				{center}
			</div>
			<div
				className={cn(
					"col-start-3 flex w-full items-center justify-end",
					classList?.right,
				)}
			>
				{right}
			</div>
		</header>
	);
}
