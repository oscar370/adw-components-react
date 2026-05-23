import { cn } from "../../lib/utils";

type SelectProps = React.ComponentProps<"select"> & {
	title?: string;
	classList?: {
		root?: string;
		title?: string;
	};
};

export function Select({
	title,
	classList,
	className,
	required,
	...rest
}: SelectProps) {
	return (
		<label className={cn("flex w-full flex-col gap-0.5", classList?.root)}>
			{title && (
				<div className={cn("ml-px", classList?.title)}>
					<span>{title}</span>
					{required && <span className="text-destructive">*</span>}
				</div>
			)}

			<select
				className={cn(
					"bg-button min-h-8 w-full rounded-lg px-2 disabled:cursor-not-allowed disabled:opacity-60",
					className,
				)}
				required={required}
				{...rest}
			/>
		</label>
	);
}
