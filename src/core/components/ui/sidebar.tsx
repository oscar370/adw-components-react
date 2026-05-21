"use client";

import { PanelLeft } from "lucide-react";
import {
	ComponentProps,
	ComponentPropsWithRef,
	createContext,
	ElementType,
	useContext,
	useEffect,
	useState,
} from "react";
import { cn } from "../../lib/utils";
import { Button } from "./button";

const SIDEBAR_WIDTH = "12rem";
const SIDEBAR_WIDTH_MOBILE = "14rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

export function useSidebar() {
	const context = useContext(SidebarContext);
	if (!context) {
		throw new Error("useSidebar must be used within a SidebarProvider");
	}
	return context;
}

type SidebarContextState = {
	isDesktopOpen: boolean;
	isMobileOpen: boolean;
	toggleSidebar: () => void;
};

const SidebarContext = createContext<SidebarContextState | null>(null);

export function SidebarProvider({
	className,
	defaultDesktopOpen = true,
	...rest
}: ComponentProps<"div"> & { defaultDesktopOpen?: boolean }) {
	const [isDesktopOpen, setIsDesktopOpen] = useState(defaultDesktopOpen);
	const [isMobileOpen, setIsMobileOpen] = useState(false);

	const toggleSidebar = () => {
		setIsDesktopOpen((prev) => !prev);
		setIsMobileOpen((prev) => !prev);
	};

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (
				event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
				(event.metaKey || event.ctrlKey)
			) {
				event.preventDefault();
				toggleSidebar();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);

	return (
		<SidebarContext.Provider
			value={{ isDesktopOpen, isMobileOpen, toggleSidebar }}
		>
			<div className={cn("flex min-h-svh w-full", className)} {...rest} />
		</SidebarContext.Provider>
	);
}

type SidebarProps = ComponentProps<"aside">;

export function Sidebar({ className, style, children, ...rest }: SidebarProps) {
	const { isDesktopOpen, isMobileOpen, toggleSidebar } = useSidebar();

	return (
		<>
			<div className="md:hidden">
				<button
					aria-label="Close sidebar"
					onClick={toggleSidebar}
					className={cn(
						"fixed inset-0 z-40 bg-[#0006] transition-opacity",
						isMobileOpen
							? "cursor-pointer opacity-100"
							: "pointer-events-none opacity-0",
					)}
					aria-hidden={!isMobileOpen}
					tabIndex={-1}
				/>
				<aside
					style={Object.assign(
						{ "--sidebar-width": SIDEBAR_WIDTH_MOBILE },
						style,
					)}
					className={cn(
						"bg-sidebar-background text-sidebar-foreground fixed top-0 left-0 z-50 h-svh w-(--sidebar-width) transition-transform duration-300 ease-in-out",
						isMobileOpen ? "translate-x-0" : "-translate-x-full",
						className,
					)}
					aria-modal="true"
					role="dialog"
				>
					{children}
				</aside>
			</div>

			<aside
				style={Object.assign({ "--sidebar-width": SIDEBAR_WIDTH }, style)}
				{...rest}
				className={cn(
					"bg-sidebar-background text-sidebar-foreground shrink-0 overflow-hidden transition-[width] duration-300 ease-in-out max-md:hidden",
					isDesktopOpen ? "w-(--sidebar-width)" : "w-0",
					className,
				)}
			>
				<div className="flex h-full w-(--sidebar-width) flex-col">
					{children}
				</div>
			</aside>
		</>
	);
}

export function SidebarTrigger(props: ComponentProps<typeof Button>) {
	const { toggleSidebar } = useSidebar();

	return (
		<Button
			className="size-8 rounded-full px-1.5"
			variant="flat"
			onClick={toggleSidebar}
			{...props}
		>
			<PanelLeft /> <span className="sr-only">Toggle Sidebar</span>
		</Button>
	);
}

export function SidebarContent({ className, ...rest }: ComponentProps<"div">) {
	return (
		<div
			className={cn(
				"flex min-h-0 flex-1 flex-col overflow-auto px-1",
				className,
			)}
			{...rest}
		/>
	);
}

export function SidebarMenu({ className, ...rest }: ComponentProps<"ul">) {
	return (
		<ul
			className={cn("flex w-full min-w-0 flex-col gap-1", className)}
			{...rest}
		/>
	);
}

export function SidebarMenuItem({ className, ...rest }: ComponentProps<"li">) {
	return <li className={cn(className)} {...rest} />;
}

type SidebarMenuButtonProps<T extends ElementType> =
	ComponentProps<"button"> & {
		isActive?: boolean;
		as?: T;
	} & ComponentPropsWithRef<T>;

export function SidebarMenuButton<T extends ElementType = "button">({
	isActive,
	className,
	children,
	as: Comp = "button",
	...rest
}: SidebarMenuButtonProps<T>) {
	return (
		<Comp
			className={cn(
				"relative flex min-h-8 w-full cursor-pointer items-center justify-start gap-1.5 overflow-hidden rounded-lg px-2 disabled:cursor-not-allowed disabled:opacity-60",
				isActive && "bg-button-pressed",
				"hover:after:bg-hover focus:after:bg-hover after:absolute after:inset-0 after:transition-colors",
				className,
			)}
			{...rest}
		>
			{children}
		</Comp>
	);
}

export function SidebarHeader({
	className,
	...props
}: ComponentProps<"header">) {
	return (
		<header
			className={cn(
				"flex min-h-8 flex-col items-center justify-center",
				className,
			)}
			{...props}
		/>
	);
}
