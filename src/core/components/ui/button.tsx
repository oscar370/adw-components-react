import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, ComponentPropsWithRef, ElementType } from "react";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
	"hover:after:bg-hover relative flex h-fit min-h-8 w-fit cursor-pointer items-center justify-center gap-1.5 overflow-hidden rounded-lg px-2 after:absolute after:inset-0 after:transition-colors disabled:cursor-not-allowed disabled:opacity-60",
	{
		variants: {
			variant: {
				regular: "bg-button",
				flat: "bg-transparent shadow-none",
				suggested: "bg-accent-background text-accent-foreground",
				destructive: "bg-destructive-background text-destructive",
				pressed: "bg-button-pressed",
			},
		},
		defaultVariants: {
			variant: "regular",
		},
	},
);

type ButtonProps<T extends ElementType> = ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		as?: T;
	} & ComponentPropsWithRef<T>;

export function Button<T extends ElementType = "button">({
	variant,
	className,
	as: Comp = "button",
	children,
	...rest
}: ButtonProps<T>) {
	return (
		<Comp className={cn(buttonVariants({ variant }), className)} {...rest}>
			{children}
		</Comp>
	);
}
