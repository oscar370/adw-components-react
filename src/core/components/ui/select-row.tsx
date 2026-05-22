import { cn } from "../../lib/utils";

type SelectRowProps = React.ComponentProps<"select"> & {
	title: string;
	subtitle?: string;
	icon?: React.ReactNode;
	classList?: {
		root?: string;
		label?: string;
		icon?: string;
		title?: string;
		subtitle?: string;
	};
};

export function SelectRow({
	title,
	subtitle,
	icon,
	classList,
	className,
	...rest
}: SelectRowProps) {
	return (
		<li className={classList?.root}>
			<label
				className={cn(
					"group flex min-h-12 w-full items-center px-4 transition-colors",
					"hover:bg-hover",
					classList?.label,
				)}
			>
				{icon && <div className={cn("mr-2", classList?.icon)}>{icon}</div>}

				<div className="flex min-w-0 flex-1 flex-col gap-px text-left">
					<span className={cn("leading-tight", classList?.title)}>{title}</span>
					{subtitle && (
						<span
							className={cn("text-dim-foreground text-sm", classList?.subtitle)}
						>
							{subtitle}
						</span>
					)}
				</div>

				<select
					className={cn(
						"bg-button rounded-md p-2 disabled:cursor-not-allowed disabled:opacity-60",
						className,
					)}
					{...rest}
				/>
			</label>
		</li>
	);
}
