import { cn } from "@/lib/utils";

interface ProxyCardProps {
	children: React.ReactNode;
	classNames?: {
		container?: string;
		content?: string;
	};
	polygon?: string;
}

export default function ProxyCard({
	children,
	classNames,
	polygon,
}: ProxyCardProps) {
	const clipPathStyle =
		"polygon(10% 0%, 100% 0%, 100% 93%, 90% 100%, 0% 100%, 0% 7%)";

	return (
		<div
			className={cn(
				"relative w-64 h-[400px] bg-cyan-500 overflow-hidden border-2 border-cyan-500 p-[1px]",
				classNames?.container
			)}
			style={{ clipPath: polygon ?? clipPathStyle }}
		>
			<div
				className={cn(
					"relative m-[1px] bg-gray-900 h-full",
					classNames?.content
				)}
				style={{ clipPath: polygon ?? clipPathStyle }}
			>
				{/* <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/30 to-cyan-500/10" />
				<div className="absolute inset-0 bg-gradient-to-t from-transparent to-cyan-500/20" /> */}

				{children}

				{/* <div className="relative flex flex-col items-center space-y-4 p-6">
					<h2 className="text-center text-xl font-bold tracking-wider text-white">
						PROXY
						<br />
						DÂN CƯ
					</h2>

					<div className="text-3xl font-bold text-white">22.000đ</div>

					<button className="w-full rounded bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 font-medium text-white transition-transform hover:scale-105 active:scale-95">
						MUA NGAY
					</button>
				</div> */}
			</div>
		</div>
	);
}
