/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	Carousel,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	CarouselProvider,
} from "@/core/components/ui/carousel";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
	component: Carousel,
	tags: ["autodocs"],
	subcomponents: {
		CarouselProvider,
		CarouselItem,
		CarouselPrevious,
		CarouselNext,
	},
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		lenght: 5,
	} as any,
	render: (args: any) => (
		<CarouselProvider className="mx-auto w-full max-w-87">
			<Carousel>
				{Array.from({ length: args.length ?? 5 }).map((_, index) => (
					<CarouselItem key={index}>
						<div className="bg-card-background flex aspect-square h-full w-full items-center justify-center rounded-lg">
							<span className="text-4xl font-semibold">{index + 1}</span>
						</div>
					</CarouselItem>
				))}
			</Carousel>
			<CarouselPrevious />
			<CarouselNext />
		</CarouselProvider>
	),
};
