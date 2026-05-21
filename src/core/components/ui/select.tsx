import { ComponentProps } from "react";
import { cn } from "../../lib/utils";

type SelectProps = ComponentProps<"select"> & {
	title?: string;
	classList?: {
		root?: string;
		title?: string;
	};
};

export function Select({ title, classList, ...rest }: SelectProps) {
	return (
		<label className={cn("flex w-full flex-col gap-0.5", classList?.root)}>
			{title && <span className={cn("ml-px", classList?.title)}>{title}</span>}

			<select
				className={cn(
					"bg-button min-h-8 w-full rounded-lg px-2 disabled:cursor-not-allowed disabled:opacity-60",
				)}
				{...rest}
			/>
		</label>
	);
}
