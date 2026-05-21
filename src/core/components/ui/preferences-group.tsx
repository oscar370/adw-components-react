import { PropsWithChildren } from "react";
import { cn } from "../../lib/utils";

type PreferencesGroupProps = PropsWithChildren & {
	title?: string;
	description?: string;
	actions?: React.ReactNode;
	classList?: {
		root?: string;
		header?: string;
		title?: string;
		description?: string;
		list?: string;
	};
};

export function PreferencesGroup({
	title,
	description,
	actions,
	classList,
	children,
}: PreferencesGroupProps) {
	const shouldRenderHeader = title || description || actions ? true : false;

	return (
		<section className={cn("w-full", classList?.root)}>
			{shouldRenderHeader && (
				<header className={cn("mb-1 flex items-center", classList?.header)}>
					<div className="flex-1">
						{title && (
							<span className={cn("font-bold", classList?.title)}>{title}</span>
						)}

						{description && (
							<p
								className={cn(
									"text-window-foreground/60 text-xs",
									classList?.description,
								)}
							>
								{description}
							</p>
						)}
					</div>

					{actions}
				</header>
			)}

			<ul
				className={cn(
					"bg-list-box-background divide-shade/30 flex w-full flex-col divide-y overflow-hidden rounded-xl shadow-sm",
					classList?.list,
				)}
			>
				{children}
			</ul>
		</section>
	);
}
