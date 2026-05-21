import { cn } from "../../lib/utils";

type SwitchProps = React.PropsWithChildren & {
	title?: string;
	classList?: {
		root?: string;
		title?: string;
	};
	checked?: boolean;
	onChange?: (e?: React.ChangeEvent) => void;
};

export function Switch({ title, classList, ...rest }: SwitchProps) {
	return (
		<label className={cn("flex w-full items-center gap-0.5", classList?.root)}>
			{title && (
				<span className={cn("ml-px flex-1", classList?.title)}>{title}</span>
			)}

			<div className="flex items-center">
				<div className="relative inline-flex cursor-pointer items-center">
					<input type="checkbox" className="peer sr-only" {...rest} />
					<div className="peer bg-button-pressed peer-checked:bg-accent-background peer-focus-visible:outline-border h-6 w-11 rounded-full peer-focus-visible:outline-3 after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
				</div>
			</div>
		</label>
	);
}
