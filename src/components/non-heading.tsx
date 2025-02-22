import { cn } from "@/lib/utils";

interface NonHeadingProps {
	title: string;
	classNames?: {
		title?: string;
		container?: string;
	};
}

const NonHeading = ({ title, classNames }: NonHeadingProps) => {
	return (
		<h1
			className={cn(
				"text-4xl md:text-6xl font-bold text-black relative inline-block",
				classNames?.container
			)}
		>
			{/* Background glow effect */}
			<span className="absolute inset-0 blur-md bg-[#a7fdff]/80 [clip-path:polygon(2rem_0,100%_0,100%_calc(100%_-_2rem),calc(100%_-_2rem)_100%,0_100%,0_2rem)]" />

			{/* Main text container with gradient */}
			<span
				className={cn(
					"relative px-12 py-6 bg-[#a7fdff] block [clip-path:polygon(2rem_0,100%_0,100%_calc(100%_-_2rem),calc(100%_-_2rem)_100%,0_100%,0_2rem)]",
					classNames?.title
				)}
			>
				{title}
			</span>

			{/* Bottom glow effect */}
			<span className="absolute inset-0 blur-sm bg-[#a7fdff]/50 translate-y-1 [clip-path:polygon(2rem_0,100%_0,100%_calc(100%_-_2rem),calc(100%_-_2rem)_100%,0_100%,0_2rem)]" />
		</h1>
	);
};

export default NonHeading;
