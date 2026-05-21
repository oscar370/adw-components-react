import { ComponentProps, ComponentPropsWithRef, ElementType } from "react";
import { cn } from "../../lib/utils";

type ActionRowProps<T extends ElementType> = ComponentProps<"div"> & {
	title: string;
	subtitle?: string;
	icon?: React.ReactNode;
	action?: React.ReactNode;
	property?: boolean;
	as?: T;
	classList?: {
		root?: string;
		icon?: string;
		title?: string;
		subtitle?: string;
		action?: string;
	};
} & ComponentPropsWithRef<T>;

export function ActionRow<T extends ElementType = "div">({
	title,
	subtitle,
	icon,
	action,
	property,
	as: Comp = "div",
	classList,
	className,
	onClick,
	...rest
}: ActionRowProps<T>) {
	const isInteractive = Comp !== "div";

	return (
		<li className={cn(classList?.root)}>
			<Comp
				className={cn(
					"flex min-h-12 w-full items-center px-4 transition-colors",
					isInteractive && "hover:bg-hover cursor-pointer",
					!isInteractive && "select-text",
					className,
				)}
				onClick={onClick}
				{...rest}
			>
				{icon && <div className={cn("mr-2", classList?.icon)}>{icon}</div>}

				<div className="flex min-w-0 flex-1 flex-col gap-px text-left">
					<span
						className={cn(
							property ? "text-window-foreground/60 text-sm" : "leading-tight",
							classList?.title,
						)}
					>
						{title}
					</span>
					{subtitle && (
						<span
							className={cn(
								!property
									? "text-window-foreground/60 text-sm"
									: "leading-tight",
								classList?.subtitle,
							)}
						>
							{subtitle}
						</span>
					)}
				</div>

				<div className={cn("ml-4 flex items-center", classList?.action)}>
					{action}
				</div>
			</Comp>
		</li>
	);
}
