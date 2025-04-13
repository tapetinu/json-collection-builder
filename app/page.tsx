import { ArrowLeft, ArrowRight } from "@/components/lucide-icons";

export default function ContainerPage() {
	return (
		<div className="w-full flex flex-col">
			<header className="flex justify-between gap-2 bg-header text-header-foreground relative">
				<div className="absolute top-0 left-0 size-full flex items-center justify-center select-none">
					<span>Welcome!</span>
				</div>

				<button
					aria-label="Go back"
					className="flex gap-1 p-2 z-1 transition-colors hover:bg-header-foreground/10 disabled:bg-transparent disabled:text-header-foreground/50">
					<ArrowLeft />
				</button>

				<button
					aria-labelledby="label-next"
					className="flex gap-1 p-2 z-1 transition-colors bg-primary text-primary-foreground hover:bg-primary-hover disabled:bg-transparent disabled:text-header-foreground/50">
					<span id="label-next">Next</span>
					<ArrowRight />
				</button>
			</header>
			<main className="flex flex-col gap-2 p-2">Here goes the main content</main>
		</div>
	);
}
