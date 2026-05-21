import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

export type ExpanderRowProps = {
	title: string;
	subtitle?: string;
	icon?: React.ReactNode;
	classList?: {
		root?: string;
		summary?: string;
		icon?: string;
		title?: string;
		subtitle?: string;
		content?: string;
	};
	children: React.ReactNode;
};

export function ExpanderRow({
	title,
	subtitle,
	icon,
	classList,
	children,
}: ExpanderRowProps) {
	return (
		<li
			className={cn(
				"border-expander-row-border rounded-xl border",
				classList?.root,
			)}
		>
			<details className="group">
				<summary
					className={cn(
						"flex min-h-12 w-full cursor-pointer items-center px-4 transition-colors",
						"hover:bg-hover",
						"list-none [&::-webkit-details-marker]:hidden",
						classList?.summary,
					)}
				>
					{icon && <div className={cn("mr-2", classList?.icon)}>{icon}</div>}

					<div className="flex min-w-0 flex-1 flex-col gap-px text-left">
						<span className={cn("leading-tight", classList?.title)}>
							{title}
						</span>
						{subtitle && (
							<span
								className={cn(
									"text-window-foreground/60 text-sm",
									classList?.subtitle,
								)}
							>
								{subtitle}
							</span>
						)}
					</div>

					<div className="ml-4 flex items-center">
						<ChevronDown className="h-4 w-4 transition-transform duration-200 group-open:rotate-180" />
					</div>
				</summary>

				<div
					className={cn(
						"bg-window-background divide-expander-row-border divide-y rounded-b-xl",
						classList?.content,
					)}
				>
					{children}
				</div>
			</details>
		</li>
	);
}
