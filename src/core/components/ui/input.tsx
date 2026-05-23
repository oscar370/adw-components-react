import { cn } from "../../lib/utils";

type InputProps = React.ComponentProps<"input"> & {
	title?: string;
	classList?: {
		root?: string;
		title?: string;
	};
};

export function Input({
	title,
	classList,
	className,
	required,
	...rest
}: InputProps) {
	return (
		<label
			className={cn("flex w-full flex-col-reverse gap-0.5", classList?.root)}
		>
			<input
				className={cn(
					"bg-button peer min-h-8 w-full cursor-text rounded-lg px-2 outline-none disabled:cursor-not-allowed disabled:opacity-60",
					"user-invalid:bg-destructive-background user-invalid:text-destructive",
					"aria-invalid:bg-destructive-background aria-invalid:text-destructive",
					className,
				)}
				required={required}
				{...rest}
			/>

			{title && (
				<div
					className={cn(
						"ml-px",
						"peer-user-invalid:text-destructive",
						"peer-aria-invalid:text-destructive",
						classList?.title,
					)}
				>
					<span>{title}</span>
					{required && <span className="text-destructive">*</span>}
				</div>
			)}
		</label>
	);
}
