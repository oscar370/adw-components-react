"use client";

import useEmblaCarousel, {
	type UseEmblaCarouselType,
} from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";
import { cn } from "../../lib/utils";
import { Button } from "./button";

type CarouselContextState = {
	carouselRef: ReturnType<typeof useEmblaCarousel>[0];
	api: ReturnType<typeof useEmblaCarousel>[1];
	scrollPrev: () => void;
	scrollNext: () => void;
	canScrollPrev: boolean;
	canScrollNext: boolean;
};

const CarouselContext = createContext<CarouselContextState | null>(null);

export function useCarousel() {
	const context = useContext(CarouselContext);

	if (!context) {
		throw new Error("useCarousel must be used within a Carousel");
	}

	return context;
}

type CarouselProps = React.ComponentProps<"div"> & {
	opts?: Parameters<typeof useEmblaCarousel>[0];
	plugins?: Parameters<typeof useEmblaCarousel>[1];
};

export function CarouselProvider({
	opts,
	plugins,
	className,
	children,
	...rest
}: CarouselProps) {
	const [carouselRef, api] = useEmblaCarousel(opts, plugins);

	const [canScrollPrev, setCanScrollPrev] = useState(false);
	const [canScrollNext, setCanScrollNext] = useState(false);

	const onSelect = useCallback((api: UseEmblaCarouselType[1]) => {
		if (!api) return;
		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
	}, []);

	const scrollPrev = useCallback(() => {
		api?.scrollPrev();
	}, [api]);

	const scrollNext = useCallback(() => {
		api?.scrollNext();
	}, [api]);

	const handleKeyDown = useCallback(
		(event: React.KeyboardEvent<HTMLDivElement>) => {
			if (event.key === "ArrowLeft") {
				event.preventDefault();
				scrollPrev();
			} else if (event.key === "ArrowRight") {
				event.preventDefault();
				scrollNext();
			}
		},
		[scrollPrev, scrollNext],
	);

	useEffect(() => {
		if (!api) return;
		// eslint-disable-next-line
		onSelect(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);

		return () => {
			api?.off("select", onSelect);
		};
	}, [api, onSelect]);

	return (
		<CarouselContext.Provider
			value={{
				carouselRef,
				api,
				scrollPrev,
				scrollNext,
				canScrollPrev,
				canScrollNext,
			}}
		>
			<div
				className={cn("relative", className)}
				onKeyDownCapture={handleKeyDown}
				role="region"
				aria-roledescription="carousel"
				{...rest}
			>
				{children}
			</div>
		</CarouselContext.Provider>
	);
}

export function Carousel({ className, ...props }: React.ComponentProps<"div">) {
	const { carouselRef } = useCarousel();

	return (
		<div ref={carouselRef} className="overflow-hidden">
			<div className={cn("-ml-4 flex", className)} {...props} />
		</div>
	);
}

export function CarouselItem({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			role="group"
			aria-roledescription="slide"
			className={cn("min-w-0 shrink-0 grow-0 basis-full pl-4", className)}
			{...props}
		/>
	);
}

export function CarouselPrevious({
	className,
	variant = "regular",
	...props
}: React.ComponentProps<typeof Button>) {
	const { scrollPrev, canScrollPrev } = useCarousel();

	return (
		<Button
			variant={variant}
			className={cn(
				"absolute top-1/2 -left-12 size-8 -translate-y-1/2 touch-manipulation rounded-full p-0",
				className,
			)}
			disabled={!canScrollPrev}
			onClick={scrollPrev}
			{...props}
		>
			<ChevronLeft />
			<span className="sr-only">Previous slide</span>
		</Button>
	);
}

export function CarouselNext({
	className,
	variant = "regular",
	...props
}: React.ComponentProps<typeof Button>) {
	const { scrollNext, canScrollNext } = useCarousel();

	return (
		<Button
			variant={variant}
			className={cn(
				"absolute top-1/2 -right-12 size-8 -translate-y-1/2 touch-manipulation rounded-full p-0",
				className,
			)}
			disabled={!canScrollNext}
			onClick={scrollNext}
			{...props}
		>
			<ChevronRight />
			<span className="sr-only">Next slide</span>
		</Button>
	);
}
