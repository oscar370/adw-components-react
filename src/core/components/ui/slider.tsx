import { cn } from "../../lib/utils";

type SliderProps = React.ComponentProps<"input"> & {
	title?: string;
	classList?: {
		root?: string;
		title?: string;
	};
};

export function Slider({ title, classList, ...rest }: SliderProps) {
	return (
		<label className={cn("flex w-full items-center gap-0.5", classList?.root)}>
			{title && (
				<span className={cn("ml-px flex-1", classList?.title)}>{title}</span>
			)}

			<input
				className={cn(
					"outline-none disabled:cursor-not-allowed disabled:opacity-60",
				)}
				type="range"
				{...rest}
			/>
		</label>
	);
}
