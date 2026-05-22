import { cn } from "../../lib/utils";

type InputRowProps = React.ComponentProps<"input"> & {
	title?: string;
	classList?: {
		root?: string;
		label?: string;
		title?: string;
	};
};

export function InputRow({
	title,
	classList,
	className,
	...rest
}: InputRowProps) {
	return (
		<li className={classList?.root}>
			<label
				className={cn(
					"flex min-h-12 w-full flex-col items-start justify-center px-4 transition-colors",
					"hover:bg-hover cursor-text",
					"has-user-invalid:bg-destructive-background has-user-invalid:text-destructive-foreground",
					"has-aria-invalid:bg-destructive-background has-aria-invalid:text-destructive-foreground",
					classList?.label,
				)}
			>
				{title && (
					<span
						className={cn(
							"text-window-foreground/60 text-sm leading-tight",
							classList?.title,
						)}
					>
						{title}
					</span>
				)}

				<input
					className={cn(
						"w-full cursor-text outline-none disabled:cursor-not-allowed disabled:opacity-60",
						className,
					)}
					{...rest}
				/>
			</label>
		</li>
	);
}
