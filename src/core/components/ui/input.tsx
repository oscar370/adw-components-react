import { cn } from "../../lib/utils";

type InputProps = React.ComponentProps<"input"> & {
	title?: string;
	classList?: {
		root?: string;
		title?: string;
	};
};

export function Input({ title, classList, ...rest }: InputProps) {
	return (
		<label className={cn("flex w-full flex-col gap-0.5", classList?.root)}>
			{title && <span className={cn("ml-px", classList?.title)}>{title}</span>}

			<input
				className={cn(
					"bg-button min-h-8 w-full cursor-text rounded-lg px-2 outline-none disabled:cursor-not-allowed disabled:opacity-60",
				)}
				{...rest}
			/>
		</label>
	);
}
