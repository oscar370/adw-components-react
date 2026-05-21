import { ChangeEvent, PropsWithChildren } from "react";
import { cn } from "../../lib/utils";

type SwitchRowProps = PropsWithChildren & {
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
	checked?: boolean;
	onChange?: (e?: ChangeEvent) => void;
};

export function SwitchRow({
	title,
	subtitle,
	icon,
	classList,
	...rest
}: SwitchRowProps) {
	return (
		<li className={classList?.root}>
			<label
				className={cn(
					"flex min-h-12 w-full items-center px-4 transition-colors",
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

				<div className="flex items-center">
					<div className="relative inline-flex cursor-pointer items-center">
						<input type="checkbox" className="peer sr-only" {...rest} />
						<div className="peer bg-button-pressed peer-checked:bg-accent-background peer-focus-visible:outline-border h-6 w-11 rounded-full peer-focus-visible:outline-3 after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
					</div>
				</div>
			</label>
		</li>
	);
}
