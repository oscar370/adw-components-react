import {
	CircleCheck,
	Info,
	Loader2,
	OctagonX,
	TriangleAlert,
} from "lucide-react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

export function Toaster({ ...rest }: ToasterProps) {
	return (
		<Sonner
			icons={{
				success: <CircleCheck className="size-4" />,
				info: <Info className="size-4" />,
				warning: <TriangleAlert className="size-4" />,
				error: <OctagonX className="size-4" />,
				loading: <Loader2 className="size-4 animate-spin" />,
			}}
			toastOptions={{
				classNames: {
					toast: "bg-popover-background! text-popover-foreground! border-none!",
					closeButton: "bg-button! text-window-foreground! border-none!",
				},
			}}
			closeButton={true}
			{...rest}
		/>
	);
}
